class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    findMin() {
        var runner = this.root
        if(runner == null){
            return false
        }
        while(runner.left){
            runner = runner.left
        }
        return runner.value
    }

    findMax() {
        var runner = this.root
        if(runner == null){
            return false
        }
        while(runner.right){
            runner = runner.right
        }
        return runner.value
    }
    add(value){
        var nn = new BSTNode(value);
        if(this.root == null){
            this.root = nn;
            return this;
        }
        var runner = this.root;

        while(runner){
            if(nn.value < runner.value){
                if(runner.left){
                    runner = runner.left;
                }
                else{
                    runner.left = nn;
                    break;
                }
            }
            else {
                if(runner.right){
                    runner = runner.right;
                }
                else{
                    runner.right = nn;
                    break;
                }
            }
        }
        console.log(nn.value + " added to the tree")
    }
    size(node = this.root) {
        if(node == null){
            return 0;
        }
        return this.size(node.left) + this.size(node.right) + 1
    }

    contains(value) {
        var runner = this.root

        while(runner){
            if(value == runner.value){
                return true
            }
            else if(value < runner.value){
                runner = runner.left;
            }
            else {
                runner = runner.right;
            }
        }
        return false
    }

    height(node = this.root){
        console.log(node)
        if(node == null){
            return 0;
        }
        return Math.max(this.height(node.right)+1, this.height(node.left)+1)
    }

    isBalanced(){
        var num = this.height(this.root.left) - this.height(this.root.right)
        if(num >= -1 && num <= 1 ){
            return true
        }
        else{
            return false
        }
    }
    remove(value, node = this.root, prevNode = this.root){
        if(node == null){
            return this
        }
        if(node.value == value){
            if(!node.right && !node.left){
                if(node == this.root){
                    this.root = null
                    return this;
                }
                if(prevNode.value < node.value){
                    prevNode.right = null
                }
                else{
                    prevNode.left = null
                }
            }
            else if(!node.right){
                if(prevNode.value < node.value){
                    prevNode.right = node.left
                }
                else{
                    prevNode.left = node.left
                }
            }
            else if(!node.left){
                if(prevNode.value < node.value){
                    prevNode.right = node.right
                }
                else{
                    prevNode.left = node.right
                }
            }
            else{
                if(prevNode.value < node.value){
                    prevNode.right = node.left
                    var runner = node.left
                    while(runner.right){
                        runner = runner.right
                    }
                    runner.right = node.right
                }
                else{
                    prevNode.left = node.right
                    var runner = node.right;
                    while(runner.left){
                        runner = runner.left
                    }
                    runner.right = node.left
                }
            }
            return this
        }
        else if(node.value < value){
            return this.remove(value, node.right, node)
        }
        else{
            return this.remove(value, node.left, node)
        }
    }
    delete(value){ //deletes first instance
        if(this.root == null){
            return null;
        }
        let runner = this.root;
        let temp;
        while(runner) {
            if(runner.value == value){
                if(runner.left == null && runner.right == null){
                    if(temp.value > runner.value){
                        temp.left = null;
                        return this;
                    } else {
                        temp.right = null;
                        return this;
                    }
                }
                if(runner.left != null && runner.right == null){
                    if(temp.value > runner.value){
                        temp.left = runner.left;
                        return this;
                    } else {
                        temp.right = runner.left;
                        return this;
                    }
                }
                if(runner.left == null && runner.right != null){
                    if(temp.value > runner.value){
                        temp.left = runner.right;
                        return this;
                    } else {
                        temp.right = runner.right;
                        return this;
                    }
                }
                else {
                    let minValue = this.findMin(runner.right);
                    this.delete(minValue);
                    runner.value = minValue;
                    return this;
                }
            }
            else if(runner.value > value){
                temp = runner;
                runner = runner.left;
            }
            else{
                temp = runner;
                runner = runner.right;
            }
        }
    }
}


var bst = new BST();

bst.add(3)
bst.add(2)
bst.add(1)
bst.add(7)
bst.add(5)
bst.add(6)
bst.add(4)
bst.add(9)
bst.add(8)
bst.add(10)
console.log(bst.findMin())
console.log(bst.findMax())
console.log(bst.contains(8))
console.log(bst.contains(7))
console.log(bst.size())
// console.log(bst.height())
// console.log(bst.isBalanced())
bst.remove(7)
bst.remove(2)
console.log(bst.contains(7))
console.log(bst.contains(2))
console.log(bst.size())
