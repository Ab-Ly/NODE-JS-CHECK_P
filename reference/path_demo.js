const path = require("path"); // path is included by default

////////// base file name
// console.log(__filename); // return all directory file name :/Users/ably/Downloads/node-js/reference/path_demo.js
// console.log(path.basename(__filename)); // return just file name: path_demo.js
///////// directory name
// console.log(path.dirname(__filename)); // return juste le dossier : /Users/ably/Downloads/node-js/reference
///////// file extension
// console.log(path.extname(__filename)); // return extension name : .js

///////// create path object
// console.log(path.parse(__filename));
/* return js object :{
    root: '/',
    dir: '/Users/ably/Downloads/node-js/reference',
    base: 'path_demo.js',
    ext: '.js',
    name: 'path_demo'
  }
*/
// console.log(path.parse(__filename).name);// return le nom de fichier : path_demo

///////// concatenate path
// console.log(path.join(__dirname,'test','hello.html'));
