const http = require("http");
const fs = require("fs");
const url = require("url");

console.warn("all-by-myself...");

const hostname = "127.0.0.1";
const port = 3000;

const html = fs.readFileSync('./static/index.html');
const indexjs = fs.readFileSync('./static/index.js');

const funFile = fs.createWriteStream("./funFile.txt");
funFile.write("My life, for Aiur...");


const server = http.createServer((req, res) => {

    res.writeHead(200, "Its all good...", {
        'Content-Type': 'text/html'
    });

    const uri = url.parse(req.url).pathname;
    console.warn(uri);


    if ( uri === "/index.js" ){
        console.warn("serving js file...");
        res.end(indexjs);
    } else {
        console.warn("serving something else...");
        res.end(html);
    }


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
