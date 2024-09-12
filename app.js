var app = require('express')();

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});