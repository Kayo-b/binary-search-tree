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


let array = randomArray()
const bst = new BST();
bst.removeDuplicates(array)
bst.prettyPrint(bst.BST)
console.log(bst.isBalanced())
