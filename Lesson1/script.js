// To create a new file in the current directory using the terminal use 'touch ...' and this will make the new file for you!
// To run a js file using node in the terminal, use 'node script.js' whilst in the files directory, and the terminal will run that javascript application.
// Although it is javasctipt built on the V8 engine, it is slightly different! For example, it doesnt have the window object, as there is no window
// And it doesnt have the document object, ad there is no document! These things were provided by the broswer! There are a few other things that are different too,
// But everything is on the website! It does however have 'global' which is effectivly its window object.

const script2 = require('./script2.js'); // Due to the new features not being avaliable, this is how to import different file information into another
											 // This is the common JS way of doing things, But as things progress, things will always change
const a = script2.largeNumber; // To access the property, you have to add the file name . the property you want to use 
const b =78;

setTimeout(() => {
	console.log(a + b);
}, 3000) //This number here is the time out that is being set, In this case 3 seconds 

console.log(__dirname); // This tells you the directory that you are currently in! Usefull for building servers 

// There are 3 types of modules in node, ones that you create yourself, 
// 1. like above (./script2.js) - Importing your own files
// 2. Ones that come built in with node 'fs', which allows you to read a file system and pick out certain things! But there are hundereds of different uses 
// or 'http' which allows you to build servers - They require no path directory, just as they are 
// 3. Are dependencies from npm. A package called 'nodemon' allows you to run the js file once, and will keep listening for updates! meaning you dont have
// To run the file every time you make an update! to install it just do 'npm init -y' - Will create the package.json and say yes to all prompts
// 'npm install nodemon --save-dev' - This will save it to the developer Dependencies! 