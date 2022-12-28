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
let x = [0,5,2,9,7,10,13,3,1,4,6,11,8,1,2,3]
let newMerge = new MergeSort(x);
let sortedArr = newMerge.sort();

class Node {
    constructor(value) {
        this.node = value;
    }
}

    //Balanced binary search tree
class BST {
    constructor(value) {
        this.array = value;
    }
    
    createBST(array = this.array, lowIndex = 0, highIndex = this.array.length - 1) {
        while(lowIndex <= highIndex) {
            let mid = Math.floor((lowIndex + highIndex) / 2)
            let node = new Node(array[mid])
            let left = this.createBST(array, lowIndex, mid - 1);
            let right = this.createBST(array, mid + 1, highIndex);
            return node;
        }

        return left, right;

    }
}


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
