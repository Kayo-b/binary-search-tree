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
let x = [6,8,1,5,3,4,2,7,9]
let newMerge = new MergeSort(x);
let sortedArr = newMerge.sort();

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
        let mid = Math.floor((lowIndex + highIndex) / 2)
        var node = new Node(array[mid])
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

    // delete(value, bst = this.BST) {
    //     //delete leaf - no rule, just delete
    //     if(bst.data === value){
    //         if(bst.right === null && bst.left === null){

    //         }
    //     }
    //     if(bst.data > value) {
    //         // if(bst.right === null && bst.left === null)

    //         if(bst.left != null)
    //         this.delete(value, bst.left);
    //         else
    //         return bst.left = new Node(value);
    //     }
    //     if(bst.data < value){
    //         if(value.right === null && value.left === null) 
    //         if(bst.right != null)
    //         this.delete(value, bst.right)
    //         else
    //         return bst.right = new Node(value);
    //     } 
        
    //     if(value.right === null && value.left === null) 

    //     //delete node with one child - child substitutes deleted node
    //     //delete node with two childs - find next biggest number from the number that is being removed and switch 
    // }
}
let bst = new BST()
bst.createBST(sortedArr);
bst.insert(10)
bst.insert(11)
console.log(JSON.stringify(bst.BST))
console.log(bst.BST.right.left)
bst.prettyPrint(bst.BST)
// bst.prettyPrint(bst.BST)