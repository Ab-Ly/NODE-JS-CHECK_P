const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

// get serialized URL
/*
console.log(myUrl.href); // return http://mywebsite.com/hello.html?id=100&status=active
*/
// get host or root domaine
/*
console.log(myUrl.host); // return : mywebsite.com:8000
console.log(myUrl.hostname); // return : mywebsite.com
*/
/*
// get pathname
console.log(myUrl.pathname); // return /hello.html

// get serialized query
console.log(myUrl.search); // return : ?id=100&status=active

// get serialized  query parameters object
console.log(myUrl.searchParams); // return : URLSearchParams { 'id' => '100', 'status' => 'active' }
*/

// add parameters
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// loop through parameters

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
