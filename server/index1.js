const http = require("http");
const fs = require("fs");
const url = require("url");

console.warn("all-by-myself...");

const hostname = "127.0.0.1";
const port = 1337;

const html = fs.readFileSync('./static/index.html');
const indexjs = fs.readFileSync('./static/index1.js');
const favicon = fs.readFileSync('./static/favicon.ico');

const funFile = fs.createWriteStream("./funFile.txt");
funFile.write("My life, for Aiur...");


const server = http.createServer((req, res) => {

    // console.warn("----");
    // console.warn("*");
    // console.warn(req.headers);
    // console.warn("----");

    res.writeHead(200, "Its all good...", {
        'Content-Type': 'text/html'
    });

    const uri = url.parse(req.url).pathname;
    console.warn(uri);


    if ( uri === "/index1.js" ){
        console.warn("serving js file...");
        res.end(indexjs);
    } else if ( uri === "/favicon.ico"){
        console.warn("serving favicon...");
        res.end(favicon);
    } else {
        console.warn("serving something else...");
        res.end(html);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
