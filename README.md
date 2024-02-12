# SpreadSheet <--> JSON Converter

A Sample Project (Assignment) for converting a spreadSheet to json.

## Installation and Setup

1. Use the git clone command to clone the repo  

``` bash
git clone https://github.com/abhijeetiyer1996/customer-spreadSheet-Reader.git
```

2. Move into the project's root directory  ```cd into the project repo```

3. Install all the dependencies of the project using the following command

```bash
# Ensure that you are in the project's root directory
npm install
```

4. Use the following CLI commands to convert the spreadsheet to JSON

``` bash
# To convert the spreadSheet to json and view it in the console
npx ts-node src/index.ts path_to_your_spreadsheet_file/file_name

# To Convert and store the spreadsheet in a file (ensure that the storing directory exists)
npx ts-node src/index.ts path_to_your_spreadsheet_file/file_name save path_to_store_the_file/ 
```

### Dev Dependencies:
1. Node.js ```v20.8.0```
2. @types/node ```^20.11.17```
2. ts-node ```^10.9.2```
4. typescript ```^5.3.3```

### Dependencies:
1. xlsx ```^0.18.5```

# Answers for the questions as per the email: 

### Limitations:
1. Automation required so that the process can convert any spreadsheet files to json
2. Need a proper interface to input the file for breaking down into json.
3. Directory access can be an issue during accessing the spreadsheet or saving the json file.
4. For now as it was not specified but depending on the data it is necessary to validate the data present well in order to filter and refine it.

### Chances for Improvements (based on above limitations)
1. Require understanding of the patterns and different file extensions sheets used or maintained.
2. Building a continous set of questionares like type of file to be converted. Location to be store (like we have for different packages during configuration like eslint).
3. Request access to grant required permissions can be made via the CLI to inform the user that the directory is currently not accessible.
4. Validations such as for the file types, for the number of rows it can handle currently can be implemented.

### Changes that can be considered for making it highly efficient
1. For scalability we can use different useful services like AWS lambda by deploying it as an api.
2. For batch processing we can split the data into batches and store in databases for crud and other processes


#### NOTE: Kindly Let me know any changes and if required.

