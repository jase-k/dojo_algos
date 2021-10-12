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
}

var bst = new BST();

bst.add(5)
bst.add(4)
bst.add(6)
bst.add(7)
bst.add(6.5)
console.log(bst.findMin())
console.log(bst.findMax())
console.log(bst.contains(8))
console.log(bst.contains(7))
console.log(bst.size())