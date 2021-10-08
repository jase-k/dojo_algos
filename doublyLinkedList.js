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
    reverseList(){
        var runner = this.head
        if(!this.head){
            return this
        }
        while(runner){
            var temp = runner.next
            runner.next = runner.prev
            runner.prev = temp
            runner = temp
        }
        temp = this.head
        this.head = this.tail;
        this.tail = temp

        return this
    }
    reverseListRecursive(runner = this.head){
        if(!runner){
            var temp = this.head
            this.head = this.tail;
            this.tail = temp
            return this
        }
        var nextNode = runner.next
        runner.next = runner.prev
        runner.prev = temp
        return this.reverseListRecursive(nextNode)
    }

}
var dll = new DLL();
dll.addToFront(1);
dll.addToFront(2);
dll.addToFront(3);
dll.addToFront(4);
dll.addToFront(5);
dll.addToFront(6);
dll.addToFront(7);
dll.printList();
console.log("================================")
dll.reverseList();
dll.printList();
console.log("================================")
dll.reverseListRecursive();
dll.printList();