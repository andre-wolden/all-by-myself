const express = require('express');
const path = require('path');

const port = process.env.PORT ? process.env.PORT : 1337;


app = express();

console.warn(path.join(__dirname, '..', 'dist'));

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'static')));

// app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'static/index.html'));
});

app.listen(port, () =>{
    console.log(`all-by-myself listening on port ${port}`)
});

const m = require('./lib/magic.js');

console.warn('PI = ' + m.pi);

var r = new m.Rectangle(13, 14);

console.warn(r.height);
