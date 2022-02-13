const fs = require("fs");
const path = require("path");

// create a folder
/*
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("folder created");
});
*/
// create and write to file avec un contenu "Hello World"
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to ...");
//   }
// );

// ecrire sur le meme fichier deja creer // CALLBACK : SYNCHRON
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to ...");

//     // file append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love Node.js",
//       (err) => {
//         if (err) throw err;
//         console.log("File written to ...");
//       }
//     );
//   }
// );
// read file
/*
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); // return ce qui est ecrit dans le fichier
*/

// rename a file
/*
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  (__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("file rename success");
  }
);
*/
