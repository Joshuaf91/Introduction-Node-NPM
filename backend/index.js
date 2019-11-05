const express = require('express'); // imports the express package
const app = express(); // creates the express server
const port = 9000; // a variable to be used as the port

// when server us hit and its just at http::localhost:9000/ Server will respond with ......
app.get('/', (request, response) => {
	response.send(`She wants the D!`);
});

// when server us hit and its just at http::localhost:9000/ Server will respond with ......
app.put('/joshua/brody/sufei', (request, response) => {
	try {
		const {
			brody, sufei, joshua,
		} = request.query;
		let rosmary;
		// optional
		if (!(brody, sufei, joshua)) {
			throw `You suck!`
		}
		if (request.query.rosmary) {
			rosmary = request.query.rosmary;
		}
		console.log("brody", brody)
		console.log("sufei", sufei)
		console.log("joshua", joshua)
		console.log("rosmary", rosmary)
		response.send(`She wants the D!`);
	} catch (err) {
		response.status(404).send(`Something broke send correct data if you want the D! ${err}`)
	}

});

app.listen(port, () => {
	console.log(`I am listening on ${port}`);
});
