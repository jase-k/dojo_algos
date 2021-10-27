let array = [4,12,4,32,56,343,12,43,1]

function insertionSort(array){
    for(let i =0; i< array.length; i++){
        let j = i +1
        while(array[j-1] > array[j] && j > 0){
            let temp = array[j]
            array[j] = array[j-1]
            array[j-1] = temp
            j--
        }
    }
}

insertionSort(array)
console.log(array)