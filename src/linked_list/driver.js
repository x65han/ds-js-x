var LinkedList = require("./linked_list.js");

var list = new LinkedList();
list.help();
// driver
let one = list.push_back(1);
list.print();
let [two, three, four] = list.push_back_all([2,3,4]);
list.print(); // 1 2 3 4
list.removeTail();
list.removeHead();
list.print(); // 2 3
four = list.push_back(4); // 2 3 4
list.print();
list.remove_node(three); // 2 4
list.print();
list.remove_node(four);
list.print();
list.remove_node(two);
list.print();
