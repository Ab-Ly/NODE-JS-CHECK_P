const os = require("os");

// get platform
/*
console.log(os.platform()); // return platform system : darwin
*/

// get cpu architecture
/*
console.log(os.arch()); // return arch : x64
*/

// get cpu core

// console.log(os.cpus()); // return object with all CPU infos

/*
[
  {
    model: 'Intel(R) Core(TM) i5-8210Y CPU @ 1.60GHz',
    speed: 1600,
    times: { user: 1992420, nice: 0, sys: 780720, idle: 3204030, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8210Y CPU @ 1.60GHz',
    speed: 1600,
    times: { user: 741700, nice: 0, sys: 293510, idle: 4941610, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8210Y CPU @ 1.60GHz',
    speed: 1600,
    times: { user: 1950330, nice: 0, sys: 694980, idle: 3331530, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8210Y CPU @ 1.60GHz',
    speed: 1600,
    times: { user: 709820, nice: 0, sys: 269480, idle: 4997540, irq: 0 }
  }
]
*/
/*
// get free memory info

console.log(os.freemem());

// get total memory info

console.log(os.totalmem());
*/

/*
// get home directory
console.log(os.homedir());
*/

// uptime
console.log(os.uptime());
