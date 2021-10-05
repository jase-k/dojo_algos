class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack{
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value){
        //if empty stack edge case: 
        var nn = new Node(value)

        if(this.top == null){
            this.top = nn
            return this
        }
        // create node and add it to the front / top of stack 
        nn.next = this.top
        this.top = nn

        return this
    }
    
    // remove and return the top value
    pop(){
        if(this.isEmpty()){
            return "Empty Stack. No Value Available"
        }
        var temp = this.top
        this.top = this.top.next

        temp.next = null

        return temp.value
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        if(this.isEmpty()){
            return "Empty Stack. No Value Available"
        }
        return this.top.value
    }

    // return whether or not a stack is empty
    isEmpty() {
        // your code here
        if(this.top == null){
            return true
        }
        return false
    }

    printStack() {
        // your code here
        if(this.isEmpty()){
            console.log("Empty stack")
            return this
        }

        var runner = this.top
        while(runner){
            console.log(runner.value)
            runner = runner.next
        }
    }

    // find the size of the stack and print
    size() {
        // your code here
        var runner = this.top
        var counter = 0

        while(runner){
            runner = runner.next
            counter++
        }
        return counter
    }
}

var sls = new SLStack()
console.log('=========================================')
sls.push(3)
sls.push(18)
sls.push(12)
console.log(sls.returnTop())
console.log('===============================')
sls.push(78)
sls.push(56)
console.log(sls.pop())
console.log('=========================================')
sls.printStack()
console.log('=========================================')
console.log(sls.size())