import * as fs from 'fs';
import * as path from 'path';
import * as XLSX from 'xlsx';

type ContentChildrenCount = {
    [key: string]: number;
};

type SheetResult = {
    directoryCategory: string[] | null;
    contentChildrenCount: ContentChildrenCount;
    directoryContactPhone: string;
    directoryContactWebsite: string;
    directoryContactEmail: string | null;
    directoryContactFax: string | null;
    directoryContactMobile: string | null;
    contentPostId: number;
    contentPostSlug: string;
    directoryLocationStreet: string;
    directoryLocationCity: string;
    directoryLocationCountry: string;
    directoryLocationAddress: string;
    directoryLocationLat: number;
    directoryLocationLng: number;
    directoryLocationZip: string;
    directoryLocationState: number;
    directorySocialFacebook: string | null;
    directorySocialGooglePlus: string | null;
    directorySocialTwitter: string | null;
    contentPostStatus: string;
    contentPostTitle: string;
};

const validateFilePath = (filePath: string): void => {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }
    const extension = path.extname(filePath).toLowerCase();
    if (extension !== '.xlsx' && extension !== '.xls') {
        console.error('Invalid file format. Please provide an Excel file.');
        process.exit(1);
    }
};

const getChildrenCount = (content: string[]): ContentChildrenCount => {
    return content.reduce((acc: ContentChildrenCount, item: string) => {
        const [key, value] = item.split('|');
        acc[key] = Number(value);
        return acc;
    }, {});
};

const processExcelData = (filePath: string): SheetResult[] => {
    try {
        validateFilePath(filePath);
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        return jsonData.map((data: any) => {
            const childrenCountDetails: string[] = data.content_children_count.split(';');
            const childrenCount: ContentChildrenCount = getChildrenCount(childrenCountDetails);

            return {
                directoryCategory: data.directory_category !== undefined ? data.directory_category.split(';') : null,
                contentChildrenCount: childrenCount,
                directoryContactPhone: data.directory_contact__phone,
                directoryContactWebsite: data.directory_contact__website,
                directoryContactEmail: data.directory_contact__email !== undefined ? data.directory_contact__email : null,
                directoryContactFax: data.directory_contact__fax !== undefined ? data.directory_contact__fax : null,
                directoryContactMobile: data.directory_contact__mobile !== undefined ? data.directory_contact__mobile : null,
                contentPostId: data.content_post_id,
                contentPostSlug: data.content_post_slug,
                directoryLocationStreet: data.directory_location__street,
                directoryLocationCity: data.directory_location__city,
                directoryLocationCountry: data.directory_location__country,
                directoryLocationAddress: data.directory_location__address,
                directoryLocationLat: data.directory_location__lat,
                directoryLocationLng: data.directory_location__lng,
                directoryLocationZip: data.directory_location__zip,
                directoryLocationState: data.directory_location__state,
                directorySocialFacebook: data.directory_social__facebook !== undefined ? data.directory_social__facebook : null,
                directorySocialGooglePlus: data.directory_social__googleplus !== undefined ? data.directory_social__googleplus : null,
                directorySocialTwitter: data.directory_social__twitter !== undefined ? data.directory_social__twitter : null,
                contentPostStatus: data.content_post_status,
                contentPostTitle: data.content_post_title
            };
        });
    } catch (error) {
        console.error('Error processing Excel data:', error);
        process.exit(1);
    }
};

const saveToJsonFile = (data: any[], outputPath: string): void => {
    try {
        fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
        console.log('Data saved to file:', outputPath);
    } catch (error) {
        console.error('Error saving data to file:', error);
        process.exit(1);
    }
};

const main = () => {
    const filePath = process.argv[2];
    if (!filePath) {
        console.error('Please provide the file path to the spreadsheet.');
        process.exit(1);
    }
    
    const formattedData = processExcelData(filePath);
    
    
    const saveToFileOption = process.argv[3];
    const saveLocation = process.argv[4]
    if (saveToFileOption === 'save') {
        let fileName = path.basename(filePath, path.extname(filePath)) + '.json';
        let outputPath = path.join(__dirname, '..', 'files',fileName);
        if (saveLocation !== undefined) {
            outputPath = path.join(__dirname, saveLocation);
        }
        console.log(outputPath)
        let outputFilePath = path.join(outputPath, fileName);
        saveToJsonFile(formattedData, outputFilePath);
    } else { 
        console.log(formattedData);
    }
}
main();