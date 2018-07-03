const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var db;
var url = 'mongodb://Negro:ABC123@ds125821.mlab.com:25821/crud';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
	if (err) return console.log(err);
	db = client.db('crud');

	app.listen(3000, () => {
		console.log('Listening on 3000');
	})
})

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
	db.collection('quotes').find().toArray((err, results) => {
		console.log(results);
	})
})

app.post('/quotes', (req, res) => {
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log('saved to database');
		res.redirect('/');
	})
})