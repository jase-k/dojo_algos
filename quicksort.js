let array = [3,34,54,1,34,76,84,456,32,46]

function quickSort(array, left = 0, right = array.length-1, partition = Math.floor((Math.random()*(right-left))+left)){
    let a = left
    let z = right
    if(right-left < 1){
        return array
    }
    while(a != z){
        console.log(partition)
        while(array[a] < array[partition] && a < partition){
            a++
        }
        while(array[z] >= array[partition] && z > partition){
            z--
        }
        if(a === partition){
            partition = z
        }
        else if(z === partition){
            partition = a
        }
        
        let temp = array[a]
        array[a] = array[z]
        array[z] = temp
    }
    
    console.log(array)
    quickSort(array, partition+1, right)
    return quickSort(array, left, partition-1) 
}

console.log(quickSort(array))

