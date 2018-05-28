var Queue = require("./queue.js");

// driver
var queue = new Queue();
for (var i = 0; i < 10; i++) {
    var value = Math.random() * 100;
    value = Math.ceil(value);
    console.log("push", value, queue.push(value));
    queue.print();
}

var arr = queue.print();

arr.forEach(x => {
    console.log("pop", x, queue.pop(x));
    queue.print();
});
