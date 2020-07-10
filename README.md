# Connecto

The app uses firebase real time database ,for gathering the contact data from the users. It uses npm firebase module to insert data in to the firebase store.The file name firebase.js has all the information related to the firebase ,its function is exported so that other files can use it to communicate with the firebase .The file is being imported in Contact.js and is used to submit the data to the firebase store.Google Analytics is included in the footer.js ,a common section for all the pages ,so that user visits from all the pages can be visualized.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install node modules.

```bash
npm install
```

## To run the Application

```nodejs
npm start


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)