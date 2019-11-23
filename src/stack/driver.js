var Stack = require("./stack.js");

// driver
var stack = new Stack();
stack.help();
for (var i = 0; i < 10; i++) {
    var value = Math.random() * 100;
    value = Math.ceil(value);
    console.log("push", value, stack.push(value));
    stack.print();
}

var arr = stack.print();

arr.forEach(x => {
    console.log("pop", x, stack.pop(x));
    stack.print();
});
