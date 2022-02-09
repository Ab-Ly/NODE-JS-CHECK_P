// console.log("Hello from Node.js ...");
// to fire => node index
////////////////////////////////
// // appel du module person =>
// const person = require("./person"); // syntax nom : commonJs
/*
// console.log(person.name); // .name or other to log specific target
const Logger = require("./logger");
const logger = new Logger();
logger.on("message", (data) => console.log("called listener :  ", data));
logger.log("Hello World !");
logger.log("Hi !");
logger.log("Hemmm !");
*/
/* return : 
called listener :   { id: 'c8ca6ac8-589c-4832-b389-b299b320c6fb', msg: 'Hello World !' }
called listener :   { id: '0e5e23be-f998-4bd2-8a3c-a64512a7fe36', msg: 'Hi !' }
called listener :   { id: '091a44d7-1a92-4c57-95f6-f1ece1f2b6e3', msg: 'Hemmm !' }
*/

const http = require("http");
const path = require("path");
const fs = require("fs");
// to serve index.html page content :
const server = http.createServer((req, res) => {
  /*
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  // to serve json 
  if (req.url === "/api/users") {
    const users = [
      { name: "bob smith", age: 25 },
      { name: "james bond", age: 55 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
  */
  // build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  // extension of file
  let extname = path.extname(filePath);
  //initial content type
  let contentType = "text/html";
  // check the extension and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
  // Read the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code} `);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server Running in Port ${PORT}`));
