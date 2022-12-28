class Node {
    constructor(value) {
        this.node = value;
        this.left = null;
        this.right = null;
    }
    setRight(value) {
        this.right = value
    }
    setLeft(value) {
        this.left = value
    }
    toString() {
        return JSON.stringify(this.node)
    }
}
function createBST(array, lowIndex = 0, highIndex = array.length - 1) {
    let mid = Math.floor((lowIndex + highIndex) / 2)
    var node = new Node(array[mid])
    while(lowIndex <= highIndex) {
        node.setRight(createBST(array, mid + 1, highIndex));
        node.setLeft(createBST(array, lowIndex, mid - 1));
        return node;
    }
    
    return;

}

console.log(JSON.stringify(createBST([1,2,3,4,5,6,7,8,9])))
