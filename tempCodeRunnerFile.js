function randomArray() {
    let count = 0
    let arr = []
    while(count < 100) {
        arr.push(Math.floor(Math.random() * 99))
        count++
    }

    return arr

}
console.log(randomArray())