class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }
    display() {
            let result = "";
            let runner = this.head;
            while (runner != null) {
                result += `${runner.value}--> `;
                runner = runner.next;
            }
            console.log(result);
        }

    reverseList(runner = this.head, previousNode = null) {

        while(runner != null){
            var temp = runner.next
            runner.next = previousNode
            previousNode = runner
            runner = temp
        }

        this.head = previousNode

        }
    reverseListRecursive(runner = this.head, previousNode = null) {
        if(runner == null){
            this.head = previousNode
            return this
        }

        var temp = runner.next
        runner.next = previousNode
        return this.reverseListRecursive( temp, runner)
                
            
        }
    
}

var sll = new SLL();

sll.addToFront(1)
sll.addToFront(2)
sll.addToFront(3)
sll.addToFront(4)
sll.addToFront(5)
sll.addToFront(6)
sll.addToFront(7)
sll.addToFront(8)
sll.display()
sll.reverseListRecursive()
sll.display()