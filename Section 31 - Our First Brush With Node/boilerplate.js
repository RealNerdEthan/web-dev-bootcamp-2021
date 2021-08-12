//File System Module in Node.js example
//https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

//This is required for fs to work
const fs = require('fs');
// console.log(fs);

//This removes the executable file path and the file path to the new folder/file
const folderName = process.argv[2] || 'Project'

//ASync version of making a directory
// fs.mkdir('ASyncTest', { recursive: true }, (err) => {
//     console.log('In the callback!')
//     if(err) throw err;
//   });

//Sync version of making a directory
//fs.mkdirSync('SyncTest');

//console.log('I come after the mkdir in the file!')

//This is an example of how to create a directory and files within it. Also wrapped in a try/catch to catch any errors
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch(error){
    console.log('Ope! An error was encountered:', error);
}