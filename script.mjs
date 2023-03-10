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
        // array = this.removeDuplicates(array)
        while(lowestIndex < highestIndex) {
            let middle = Math.floor((lowestIndex + highestIndex) / 2);
            let array1 = this.sort(array, lowestIndex, middle);
            let array2 = this.sort(array, middle + 1, highestIndex);
            return this.merge(array1, array2);
        }
        return this.merge([array[highestIndex]], [])
    }
    



}
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
export default class BST {
    constructor() {
        this.BST = null;
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '???   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '????????? ' : '????????? '}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '???   '}`, true);
        }

      }

    removeDuplicates(arr1) {
        
        for(let x = 0; x < arr1.length; x++) {
            for(let y = x+1; y < arr1.length; y++) {
                if(arr1[x] === arr1[y]) {
                    arr1.splice(y,1);
                    y -= 1;
                }
            }
        }
        
        return this.createBST(arr1)
    }
    
    createBST(array, lowIndex = 0, highIndex = array.length - 1) {
        let sortedArr = new MergeSort(array);
        // sortedArr.removeDuplicates()
        // sortedArr = sortedArr.removeDuplicates();
        sortedArr = sortedArr.sort();
        let mid = Math.floor((lowIndex + highIndex) / 2);
        var node = new Node(sortedArr[mid]);
        while(lowIndex <= highIndex) {
            node.setRight(this.createBST(sortedArr, mid + 1, highIndex));
            node.setLeft(this.createBST(sortedArr, lowIndex, mid - 1));
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

        return arr2
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
        //traverse left side and get all smaller values
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

    height(value) {
        let root = this.find(value);
        let temp = 0
        let heightRecursiv = (x, count = 0) => {
            if (x === null) return 
            count += 1;
            heightRecursiv(x.left, count);
            heightRecursiv(x.right, count);
            if (temp < count) temp = count;
            return temp-1;
        }
        return heightRecursiv(root);
    }

    depth(value, bst = this.BST, count = 0) {
        if (bst === null) return;
        if (bst.data === value) return count;
        count += 1;
        let x = this.depth(value, bst.right, count);
        let y = this.depth(value, bst.left, count);
        if (x != undefined) return x;
        if (y != undefined) return y;
    }

    isBalanced(bst = this.BST) {
        //if height difference between L and R tree is > 1, return false, else return true.
        if(bst.right != null && bst.left != null) {
            if(this.height(bst.left.data) - this.height(bst.right.data) > 1 ||
            this.height(bst.right.data) - this.height(bst.left.data) > 1) {
                return false;
            }
            let left = this.isBalanced(bst.left);
            if (left === false) return left;
            let right = this.isBalanced(bst.right);
            if (right === false) return right;

            return true;
        }
    }

    rebalance() {
        this.createBST(this.inorder())
    }


}
