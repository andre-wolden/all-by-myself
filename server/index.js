const express = require('express');
const path = require('path');

const port = process.env.PORT ? process.env.PORT : 1337;


app = express();

app.use(express.static(__dirname));
// app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () =>{
    console.log(`all-by-myself listening on port ${port}`)
});
