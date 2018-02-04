/*
  you should implement data structure called Linked list (in can be doubly linked or singly linked)
  and all methods that listed below
 */
function LinkedList(arr) {
    this.length = 0;
    obj = {next: null};
    for(var i=arr.length;i;--i) {
        obj.value = arr.pop();
        obj = {next: obj};
        this.length++;
    }
    obj=obj.next;
    console.log("Linked List is created");
    this.toString();
}
LinkedList.prototype.get= function(value) {
    if (value>this.length-1) {
        console.log('Error: there is no such element');
    } else {
        var i =0;
        currentObj = obj;
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
        currentObj = obj;
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
// adds element or elements at the end of the list
LinkedList.prototype.push = function() {
    var position=0;
    currentLastElement = obj;
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
        currentElement = obj;
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
var arr = [1, 23, 44, 'dsfs', {}];
const list = new LinkedList(arr);
/* 
  methods can be implemented in functional style - list should be immutable
  and every operation on list will not modify it, but will return new instance of a list

  or in imperative style - methods will modify original list
 */

// loop on list
/*for (let i = 0; i < list.length; i++) {
  console.log(list.get(i));
}*/

// forEach on list
list.forEach((element, index, array) => console.log(element));

// set an element to specific position
list.set(1, 'aaaaa');

// adds element or elements at the end of the list
list.push('dsdf', 12);

// adds element or elements at the beginning of the list
list.unshift('sdd', 222);

// removes last element from the list
list.pop();

// removes first element from the list
list.shift();

// returns boolean
list.contains('sdfs');

// returns string representation of a list
list.toString();

// reverse list
list.reverse();

// ----- advanced tasks ----- 

list.sort();

// you can experiment on that with "property descriptors"
for (i in list) {
  console.log(i);
}