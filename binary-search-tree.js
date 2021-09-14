/*

Binary Search Tree!

Name your class Tree. 

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

There is a tree visualization helper. It will tell show you how your tree looks as you create it. In order
for this to work and for the unit tests to pass you, you must implement a Tree .toObject function that returns
your tree as a series of nested objects. Those nested objects must use the following names for their properties

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

As always, you can change describe to xdescribe to prevent the unit tests from running

*/


class Tree {

    constructor(){
        this.value = null
        this.left = null;
        this.right = null
    }

    
    toObject(){
        return {
            value: this.value,
            left: this.left===null?null:this.left.toObject(), 
            right: this.right===null?null:this.right.toObject(), 
        }
    }

    add(num){

        if (this.value === null) {
            this.value = num
        } else if (num > this.value) {
            this.right = this._add(num, this.right)
        } else if (num < this.value){
            this.left = this._add(num, this.left)
        }
    }
    _add(num, tree) {
        //console.log(tree)
        if (tree === null) {
            tree = new Tree()
            tree.value = num
        } else if (num > tree.value) {
            tree.right = tree._add(num, tree.right)
        } else if (num < tree.value){
            tree.left = tree._add(num, tree.left)
        }
        return tree;
    }
}

let t = new Tree()


//const nums = [3,7,4,6,5,1,10,2,9,8];
const nums = [1,2,3,4,5,0];

nums.map( num => t.add(num));

//console.log(t)
//console.log(t.toObject())

console.log(t.toObject())

module.exports = Tree;