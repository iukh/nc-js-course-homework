/*
  you should implement data structure called Linked list (in can be doubly linked or singly linked)
  and all methods that listed below
 */
function LinkedList(arr) {
    this.length = 0;
    this.head = null;
    obj = {next: null};
    for(var i=arr.length;i;--i) {
        obj.value = arr.pop();
        obj = {next: obj};
        this.length++;
    }
    obj=obj.next;
    this.head =obj;
    console.log("%cLinked List is created","color:red;");
    this.toString();
}
//returns element from position
LinkedList.prototype.get= function(value) {
    if (value>this.length-1) {
        console.log('Error: there is no such element');
    } else {
        var i =0;
        currentObj = this.head;
        while (i<value){
            currentObj=currentObj.next;
            i++;
        }
        return currentObj.value;
    }
}
// removes last element from the list
LinkedList.prototype.pop = function() {
    if (this.length==0){
    console.log('Error: It is impossible to remove element. The list is empty')
    } else {
        var position=0;
        currentObj = this.head;
        while(position<this.length-2) {
            currentObj=currentObj.next;
            position++;
        }
        delElement =currentObj.value;
        currentObj.next = null;
        this.length--
        console.log(delElement+" element is removed from LinkedList");
        this.toString();
    }
}
// removes first element from the list
LinkedList.prototype.shift = function() {
    if (this.length==0){
        console.log('Error: It is impossible to remove element. The list is empty')
        } else {
            var currentElement= this.head;
            delElement = currentElement.value;
            this.head=currentElement.next;
            currentElement = {};
            this.length--;
            console.log(delElement+" element is removed from LinkedList");
            this.toString();
    }
}
// adds element or elements at the end of the list
LinkedList.prototype.push = function() {
    var position=0;
    currentLastElement = this.head;
    while(position<this.length-1) {
        currentLastElement=currentLastElement.next;
        position++;
    }
    for(var i=0;i<arguments.length;i++) {
        currentLastElement.next = {
            value: arguments[i],
            next: null
        };
        console.log(arguments[i] +" element is added to LinkedList");
        currentLastElement=currentLastElement.next;
        this.length++;
    }
    this.toString();
}
// adds element or elements at the beginning of the list
LinkedList.prototype.unshift = function() {
    for(var i=arguments.length-1;i>=0;--i) {
            console.log(arguments[i] +" element is added to LinkedList");
            this.set(0,arguments[i]);
        }
}
// set an element to specific position
LinkedList.prototype.set = function(position,value) {
    if (position>this.length) {
        this.push(value);
    } else {
        currentElement = this.head;
        var i=0;
        while(i<position) {
            currentElement=currentElement.next;
            i++;
        }
        saveCurrentElement = {
            value: currentElement.value,
            next: currentElement.next
        };
        currentElement.value = value;
        currentElement.next =saveCurrentElement;
        this.length++;
        this.toString();
    }
}
// returns string representation of a list
LinkedList.prototype.toString = function() {
    console.log("Current elements:");
    var arr =[];
    for (var i = 0; i < this.length; i++) {
      arr[i]=this.get(i);
    }
    console.log(arr);
}
// forEach on list
LinkedList.prototype.forEach = function(callback) {
    var currentObj= this.head;
    var arr =[];
    for (var i = 0; i < this.length; i++) {
      arr[i]=this.get(i);
    }
    return Array.prototype.forEach.call(arr,callback);
}
//reverse list
LinkedList.prototype.reverse = function() {
    var arr =[];
        for (var i = 0; i < this.length; i++) {
          arr[i]=this.get(i);
        }
    arr.reverse();
    this.length = 0;
    this.head = null;
    obj = {next: null};
    for(var i=arr.length;i;--i) {
        obj.value = arr.pop();
        obj = {next: obj};
        this.length++;
    }
    obj=obj.next;
    this.head =obj;
    this.toString();
}
// returns boolean
LinkedList.prototype.contains = function(value) {
    var flag =false;
    var i =0;
    currentObj = this.head;
    while (i<this.length){
    if (currentObj.value == value) { flag=true; break;}
    currentObj = currentObj.next;
    i++;
    }
    console.log(flag);
}
var arr = [1, 23, 44, 'dsfs', {}];
const list = new LinkedList(arr);

// loop on list. Use in another methods (e.g. toString)
/*for (let i = 0; i < list.length; i++) {
  console.log(list.get(i));
}*/

// forEach on list
console.log("%cTASK: forEach on list METHOD: list.forEach((element, index, array) => console.log(element));","color:blue; font-weight:bold;")
list.forEach((element, index, array) => console.log(element));

// set an element to specific position
console.log("%cTASK: set an element to specific position. METHOD: list.set(1, 'aaaaa')","color:blue; font-weight:bold;")
list.set(1, 'aaaaa');

// adds element or elements at the end of the list
console.log("%cTASK: adds element or elements at the end of the list. METHOD: list.push('dsdf', 12);","color:blue;font-weight:bold;")
list.push('dsdf', 12);

// adds element or elements at the beginning of the list
console.log("%cTASK: adds element or elements at the beginning of the list. METHOD: list.unshift('sdd', 222);","color:blue;font-weight:bold;")
list.unshift('sdd', 222);

// removes last element from the list
console.log("%cTASK: removes last element from the list. METHOD: list.pop();","color:blue;font-weight:bold;")
list.pop();

// removes first element from the list
console.log("%cTASK: removes first element from the list. METHOD: list.shift();","color:blue;font-weight:bold;")
list.shift();

// returns string representation of a list
console.log("%cTASK: returns string representation of a list. METHOD: list.toString();","color:blue;font-weight:bold;")
list.toString();

// reverse list
console.log("%cTASK: reverse list. METHOD: list.reverse();","color:blue;font-weight:bold;")
list.reverse();

// returns boolean
console.log("%cTASK: Contains, returns boolean. METHOD: list.contains('222');","color:blue;font-weight:bold;")
list.contains('222');
// ----- advanced tasks ----- 

//list.sort();

// you can experiment on that with "property descriptors"
//for (i in list) {
//  console.log(i);
//}