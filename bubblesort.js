var array = [4,56,2,45,64,23,43]

function bubbleSort(array, sorted = false, iteration = 0 ){
    if(sorted == true){
        return array
    }
    sorted = true
    
    for(var i = 0 ; i < array.length-iteration; i++){
        if(array[i] > array[i+1]){
            var temp = array[i]
            array[i] = array[i+1]
            array[i+1] = temp
            sorted = false
        }
    }
    iteration++
    return bubbleSort(array, sorted, iteration)
}

console.log(bubbleSort(array))