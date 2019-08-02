const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/test', (req, res) => {
	res.send(`
		<html>
			<head></head>
			<body>Test page </body>
		</html>
	`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Mixing it up on port ${PORT}`);
});
