const express = require('express');

const port = process.env.PORT ? process.env.PORT : 1337;


app = express();

app.use(express.static('static'));
app.use(express.static('dist'));

app.listen(port, () =>{
    console.log(`all-by-myself listening on port ${port}`)
});
