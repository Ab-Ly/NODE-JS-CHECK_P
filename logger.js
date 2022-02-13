const EventEmitter = require("events");
const uuid = require("uuid");

//console.log(uuid.v4()); // generate a random UUID : return : 66c0af75-ac59-47fa-aed6-3d49ec47245e

class Logger extends EventEmitter {
  log(msg) {
    // call events
    this.emit("message", { id: uuid.v4(), msg });
  }
}
module.exports = Logger;
