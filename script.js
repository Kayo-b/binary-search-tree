    // MergeSort is composed of two functions:
    // Sort: for taking a full unsorted array and splitting it in half.
    // Merge: for taking those two arrays that resulted from Sort and merging them in order.
    // The Sort function is recursive and calls itself and the merge function.

class MergeSort {
    constructor(value) {
        this.array = value;
    }

    merge(arr1, arr2) {
        let newArray = [];
        let i = 0;
        let j = 0;
        let k = 0;
        while(i < arr1.length && j < arr2.length) {
            if(arr1[i] < arr2[j]) {
                newArray[k++] = arr1[i++];
            } else {
                newArray[k++] = arr2[j++]
            }
        }
        // Handling values in case there are still missing values to be merged
        for(i = i; i < arr1.length; i++) {
            newArray[k++] = arr1[i];
        }
        for(j = j; j < arr2.length; j++) {
            newArray[k++] = arr2[j];
        }
        
        return newArray
    }

    sort(array = this.array, lowestIndex = 0, highestIndex = this.array.length - 1) {

        while(lowestIndex < highestIndex) {
            let middle = Math.floor((lowestIndex + highestIndex) / 2);
            let array1 = this.sort(array, lowestIndex, middle);
            let array2 = this.sort(array, middle + 1, highestIndex);
            return this.merge(array1, array2);
        }
        return this.merge([array[highestIndex]], [])
    }


}
let x = [30,50,20,19,59,40,32,34,36,70,60,65,80,85,75]
let newMerge = new MergeSort(x);
let sortedArr = newMerge.sort();
console.log(sortedArr)
class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
    setRight(value) {
        this.right = value
    }
    setLeft(value) {
        this.left = value
    }

}



class Tree {

    prototype(value) {
        this.root = value;
    }
}

    //Balanced binary search tree
class BST {
    constructor() {
        this.BST = null;
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }

      }
    
    
    createBST(array, lowIndex = 0, highIndex = array.length - 1) {
        let mid = Math.floor((lowIndex + highIndex) / 2);
        var node = new Node(array[mid]);
        while(lowIndex <= highIndex) {
            node.setRight(this.createBST(array, mid + 1, highIndex));
            node.setLeft(this.createBST(array, lowIndex, mid - 1));
            this.BST = node;
            return node;
        }
        return null;
    }
    
    insert(value, bst = this.BST) {
        
        if(bst.data > value) {
            if(bst.left != null)
            this.insert(value, bst.left);
            else
            return bst.left = new Node(value);
        }
        if(bst.data < value){
            if(bst.right != null)
            this.insert(value, bst.right)
            else
            return bst.right = new Node(value);
        } 
        
    }

    delete(value, bst = this.BST) {
        //Right Side
        if(bst.right != null && bst.right.data === value){
            //delete leaf - no rule, just delete
            if(bst.right.right === null && bst.right.left === null) {
                bst.right = null;   
                return;
            }
            //if one of the two nodes arent null, take the not null node and substitute it for the deleted node
            if(bst.right.right != null && bst.right.left === null ||
                bst.right.right === null && bst.right.left != null) {
                if(bst.right.right != null) {
                    bst.right = bst.right.right;
                } else {
                    bst.right = bst.right.left;
                }
                return;
            }
            if(bst.right.right != null && bst.right.left != null) {
                //go to right node: 
                //Case1: if r-node has 2 child nodes take the left child node and use it to substitute the value that will be deleted. 
                if(bst.right.right.right != null && bst.right.right.left != null ) {
                    let tempRight = bst.right.right;
                    let tempLeft = bst.right.left;
                    bst.right = bst.right.right.left;
                    bst.right.right = tempRight;
                    bst.right.left = tempLeft;
                    bst.right.right.left = null;
                //Case2: if it doesnt have 2 child nodes, that means that the next biggest value is the right node itself, so just substitute it.
                } else {
                    let temp = bst.right.left;
                    bst.right = bst.right.right;
                    bst.right.left = temp;
                }
                return;
            }
            
        }
        //Left Side
        if(bst.left != null && bst.left.data === value) {
            //delete leaf - no rule, just delete
            if(bst.left.right === null && bst.left.left === null) {
                bst.left = null;
                return;
            }
            //if one of the two nodes arent null, take the not null node and substitute it for the deleted node
            if(bst.left.right != null && bst.left.left === null ||
                bst.left.right === null && bst.left.left != null) {
                if(bst.left.right != null) {
                    bst.left = bst.left.right;
                } else {
                    bst.left = bst.left.left;
                }
                return;
            }
            //if there are two child nodes, search for next highest value and substitute the deleted value with it. 
            if(bst.left.right != null && bst.left.left != null) {
                //go to left node:  
                //Case1: if L-node has 2 child nodes take the left child node and use it to substitute the value that will be deleted.
                if(bst.left.right.right != null && bst.left.right.left != null ) {
                    let tempRight = bst.left.right;
                    let tempLeft = bst.left.left;
                    bst.left = bst.left.right.left;
                    bst.left.right = tempRight;
                    bst.left.left = tempLeft;
                    bst.left.right.left = null;
                //Case2: if it doesnt have 2 child nodes, that means that the next biggest value is the left node itself, so just substitute it.
                } else {
                    let temp = bst.left.left
                    bst.left = bst.left.right;
                    bst.left.left = temp;
                }
                return;
            }

        }
        if(bst.data > value) {
            if(bst.left != null) this.delete(value, bst.left);
            return;
        }
        if(bst.data < value){
            if(bst.right != null) this.delete(value, bst.right);
            return;
        } 

        //delete node with one child - child substitutes deleted node
        //delete node with two childs - find next biggest number from the number that is being removed and switch 
    }

    find(value, bst = this.BST) {
        if(bst.data === value) {
            return bst;
        }
        if(bst.data > value) {
            if(bst.left != null) return this.find(value, bst.left);
        }
        if(bst.data < value){
            if(bst.right != null) return this.find(value, bst.right);
        } 

    }

    levelOrder(bst = this.BST) {
        //Send Root node to queue > read root node and save it > send its children to queue > repeat recursively or with interations
        let arr = [];
        let arr2 = [];
        arr.push(bst);
        while(arr.length != 0) {
            if(arr[0].left != null) arr.push(arr[0].left);
            if(arr[0].right != null) arr.push(arr[0].right);
            arr2.push(arr.shift().data)
        }
        console.log(arr2)
    }

    levelOrderRecursive(bst = this.BST, arr = [], queue = []) {
        if(bst === null) return;
        //visit the node and save it in an array
        arr.push(bst.data);
        //push two child nodes to queue, these will be visited in the next recursion
        queue.push(bst.left);
        queue.push(bst.right);
        //while loop keeps removing first element from queue and sending it to recursion while queue has elements in it.
        while(queue.length > 0) {
            let level = queue[0];
            queue.shift();
            this.levelOrderRecursive(level, arr, queue);
        }

        return arr
    }

    inorder(bst = this.BST, arr = []) {
        //transverse left side and get all smaller values
        if(bst === null) return
        arr.push(bst.data);
        this.inorder(bst.left, arr);
        this.inorder(bst.right, arr);
        let newArr = new MergeSort(arr)
        return newArr.sort()

    }

    preorder(bst = this.BST, arr = []) {
        if(bst === null) return
        arr.push(bst.data);
        this.preorder(bst.left, arr);
        this.preorder(bst.right, arr);
        return arr
    }

    postorder(bst = this.BST, arr = []) {
        if(bst === null) return
        arr.unshift(bst.data)
        this.postorder(bst.right, arr)
        this.postorder(bst.left, arr)

        return arr

    }


}
let bst = new BST()
bst.createBST(sortedArr);
// console.log(JSON.stringify(bst.BST))
console.log(bst.postorder())
bst.prettyPrint(bst.BST);
// bst.prettyPrint(bst.BST)
