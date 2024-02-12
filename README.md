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
# ensure that you are in the project's root directory
npm install
```

4. use the following CLI commands to convert the spreadsheet to JSON

``` bash
# To convert the spreadSheet to json and view it in the console
npx ts-node src/index.ts path_to_your_spreadsheet_file/file_name

# To Convert and store the spreadsheet in a file (ensure that the storing directory exists)
npx ts-node src/index.ts path_to_your_spreadsheet_file/file_name save path_to_store_the_file/ 
```

## Dev Dependencies
1. Node.js ```v20.8.0```
2. @types/node ```^20.11.17```
2. ts-node ```^10.9.2```
4. typescript ```^5.3.3```

### Dependencies
1. xlsx ```^0.18.5```

Kindly Let me know any changes and if required.

#
