
class Node{
    constructor(val){
        this.val = val;
        this.next = null; // node (.val, .next)
        //THIS IS NEW
        this.child = null; // SLL (.head)
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(val){
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    printMe(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    //populates each node with a random amount of children from 0 to 4
    populateChildren(){

        let runner = this.head;

        while(runner !== null){
            let numChildren = Math.floor(Math.random() * 5);
            if(numChildren !== 0){
                let childList = new SLL();
                for(let i = 0; i < numChildren; ++i){
                    childList.addToFront(Math.floor(Math.random() * 50));
                }
                runner.child = childList;
            }
            runner = runner.next;
        }
    }
    flattenChildren(){
        var runner = this.head
        
        //if node has child. save the node.next
        while(runner != null){
            if(runner.child != null){
                var tempNode = runner.next
                //point node.next to this.head of child.
                runner.next = runner.child
                while(runner.next != null){
                    runner = runner.next
                }
                //point last node of child to the node.next that is saved
                runner.next = tempNode
            }
            runner = runner.next
        }
        return this
    }
    

    printMeWithChildren(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val}`;
            if(runner.child){
                returnStr += "(";
                let runner2 = runner.child.head;
                while(runner2 !== null){
                    returnStr += `${runner2.val} ->`;
                    runner2 = runner2.next;
                }
                returnStr += ")";
            }
            returnStr += " -> ";
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }
}

var sll = new SLL()
sll.addToFront(1)
sll.addToFront(2)
sll.addToFront(3)
sll.addToFront(4)
sll.addToFront(5)
sll.populateChildren()
sll.printMe()
sll.printMeWithChildren()
sll.flattenChildren()
sll.printMe()