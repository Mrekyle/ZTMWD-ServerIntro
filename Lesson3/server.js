const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Getting Root');
})

app.use(express.urlencoded({extended: false})); // To access the information given by a post method, this needs to be used 

app.use(express.json()); // To access information given by a JSON format, this code needs to be used so the server can understand what it is receiving

app.post('/Profiles', (req, res) => {
	console.log(req.body);
	res.send(user);
})

const user = {
		name: 'John',
		hobby: 'Skating',
	}

app.get('/', (req, res) => { // Wont work, As i am currently not being posted amy responses
	const user = {
		name: 'Kyle',
		hobby: 'Programming',
	}
	res.send(user);
} )

app.use((res, req, next) => {
	console.log('Hello There');
	next();
})

app.get('/Test', (req, res) => {
	res.send('test test');
})

app.listen(3000);

// Express will automatically work out what you sere sending, For example sending a text document, it will automatically know without it being defined
// Same with JSON strings.

// Express works by reading line by line, and when ever it can match something up to the information on the front end of the server it will respond with that
// Like above, one is /Profiles when the url is locsalhost:3000/Profiles, it will send that response, If it is not but it can match the root, 
//then it will send the root. But if it is something that doesnt match up to anything, it will sey that it cant find it. 

//When using app.use, you will always need to define for it to go onto the next thing! As other wise it will jsut get stuck there! This is called 
// Middleware

//

