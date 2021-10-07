class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}


class DLL{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    addToFront(value) {
        var node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++
        return this
    }

    addtoBack(value) {
        var node = new Node(value);
        if(!this.tail){
            this.tail = node;
            this.head = node;
        }
        else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this
    }

    removeFromFront(){
        if(!this.head){
            console.log("List is empty!")
            return this
        }
        this.head = this.head.next
        this.head.prev.next = null
        this.head.prev = null
        this.length--
        return this
    }
    
    removeFromBack(){
        if(!this.tail){
            console.log("List is empty!")
            return this
        }
        this.tail = this.tail.prev
        this.tail.next.prev = null
        this.tail.next = null
        this.length--
        return this
    }

    printList() {
        var runner = this.head
        while(runner){
            console.log(runner.value);
            runner = runner.next
        }
    }
    printListBackwards(){
        var runner = this.tail
        while(runner){
            console.log(runner.value);
            runner = runner.prev
        }
    }
}
var dll = new DLL();
dll.addToFront(1);
dll.addToFront(2);
dll.addToFront(3);
dll.addToFront(4);
console.log("Current Length:", dll.length)
dll.addtoBack(4);
dll.addtoBack(3);
dll.addtoBack(2);
dll.addtoBack(1);
dll.removeFromFront();
dll.removeFromBack();
dll.printList();
console.log("================================")
dll.printListBackwards();
console.log("Current Length:", dll.length)