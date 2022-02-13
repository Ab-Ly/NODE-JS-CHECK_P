const EventEmitter = require("events");

// create emitter class

class MyEmitter extends EventEmitter {}

// init object

const myEmitter = new MyEmitter();

// create events listener

myEmitter.on("event", (event) => {
  console.log("event fired !!!");
});
// init event

myEmitter.emit("event");
