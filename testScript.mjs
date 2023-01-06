import BST from './script.mjs';

function randomArray() {
    let count = 0
    let arr = []
    while(count < 150) {
        arr.push(Math.floor(Math.random() * 150))
        count++
    }

    return arr
}

function randomNumbersRange(min, max, bst) {
    let count = 0
    while(count < 150) {
        bst.insert(Math.floor(Math.random() * (max - min) + min))
        count++
    }
    return bst
}

let array = randomArray()

const bst = new BST();
bst.removeDuplicates(array)
bst.prettyPrint(bst.BST)
console.log(bst.isBalanced())
console.log(bst.levelOrder())
console.log(bst.inorder())
console.log(bst.preorder())
console.log(bst.postorder())
//create copy of the bst and insert more 150 random numbers between 151 and 700
let bst2 = randomNumbersRange(151, 700, bst)
bst2.prettyPrint(bst2.BST)
console.log(bst2.isBalanced())
bst2.rebalance()
bst2.prettyPrint(bst2.BST)
console.log(bst2.isBalanced())
console.log(bst2.levelOrder())
console.log(bst2.inorder())
console.log(bst2.preorder())
console.log(bst2.postorder())
