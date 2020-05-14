const http = require('http');

const server = http.createServer((request, response) => {
	console.log('Headers', request.headers.connection); // This allows us to reguest certain information inside the header response.
	console.log('Method', request.method);
	console.log('Url', request.url);
	const user = {
		name: 'John',
		hobby: 'Skating',
	}
	response.setHeader('Content-Type', 'application/json'); // You can also send 'text/html' 
	response.end(JSON.stringify(user));
})

server.listen(3000);