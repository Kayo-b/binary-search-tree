    function removeDuplicates(arr1 = [30,50,20,31,59,59,59,40,32,34,36,70,60,65,80,85,75,75]) {
        
        for(let x = 0; x < arr1.length; x++) {
            for(let y = x+1; y < arr1.length; y++) {
                if(arr1[x] === arr1[y]) {
                    arr1.splice(y,1);
                    y -= 1;
                }
            }
        }
        
        return arr1
    }
    console.log(removeDuplicates())