const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false})); // To access the information given by a post method, this needs to be used 

app.use(express.json()); // To access information given by a JSON format, this code needs to be used so the server can understand what it is receiving

app.use(express.static(__dirname + '/public')) // This is how to send a website file, For this purpose I used the background generator from the course! 
											   // Obviously folder names can be changed to what ever, but this is the standard way!

// app.get('/', (req, res) => {
	// req.query // Is accessing the query string, accessed in the url by '?name=kyle&age=24'
	// req.body // This receives what ever information is put into the body
	// req.headers // since the video it has updates to this 'header' just shows the function of it. This will show all the information that is given by the headers
	// req.params // This uses the paramaters of the url, for example '1234' in the url bar will be sent to you providing it matches up to the paramaters
	// res.send('Getting Root'); // Sends a text string 
	// res.status(404).send('Not found'); // Will send the status of 404 and also pring out not found - can be used for any status updates
// })

app.listen(3000);


// RESTful API is a set of functions that specify what the server can send and do and how to use the provided information.

