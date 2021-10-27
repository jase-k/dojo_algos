let array = [6,24,56,24,53,97,45,37,1]

function selectionSort(array, lastIndex = array.length-1){
    if(lastIndex < 1){
        return array
    }
    //Find Largest
    let largest = 0
    for(let i = 0; i < lastIndex; i++){
        if(array[i] > array[largest]){
            largest = i
        }
    }
    if(array[largest] != array[lastIndex]){
        let temp = array[largest]
        array[largest] = array[lastIndex]
        array[lastIndex] = temp
    }
    //Swap to the end
    return selectionSort(array, lastIndex-1)
}

console.log(selectionSort(array))