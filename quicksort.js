let array = []
for(let i = 0; i < 1000; i++){
    array.push(Math.floor(Math.random()*1000))
}

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
console.time("1st")
quickSort(array)
console.timeEnd("1st")


function quickSort(array, left = 0, right = array.length-1){
    if((right - left) < 1){
        return array
    }

    let partition = findPartition(array, left, right)

    quickSort(array, left, partition-1)
    return quickSort(array, partition + 1, right)
}
function findPartition(array, l, r){
    //random starting Partition index
    let partition = Math.floor((Math.random()*(r-l))+l)

    //Loop until partition found
    while(r != l){
        //find left value greater than partition
        while(array[l] < array[partition] && l < partition){
            l++
        }
        //find right value less than partition
        while(array[r] >= array[partition] && r > partition){
            r--
        }
        //switch values
        let temp = array[r]
        array[r] = array[l]
        array[l] = temp
        //Keeps track of the partition location
        if(r == partition){
            partition = l
        }
        else if(l == partition){
            partition = r
        }
    }
    return partition
}
array = []
for(let i = 0; i < 1000; i++){
    array.push(Math.floor(Math.random()*1000))
}
console.time("2nd")
quickSort(array)
console.timeEnd("2nd")

const partition = (arr, start=0, end = arr.length-1)=>{ //when integrating this with quicksort, you'll need to give default parameters
    var numless=start;
    for(var i=start; i<=end;i++) {
        if((arr[i] < arr[end]) || (i == end)) {
            var temp = arr[numless];
            arr[numless] = arr[i];
            arr[i] = temp;
            numless++;
        }
    }
    numless--;
    return numless;
}



const quicksort = (arr, start=0, end = arr.length-1)=>{
    if(end > start) {
        var pivotInd = partition(arr, start, end);
        quicksort(arr, start, pivotInd-1);
        quicksort(arr, pivotInd+1,end);
    }
    return arr
}
array = []
for(let i = 0; i < 1000; i++){
    array.push(Math.floor(Math.random()*1000))
}
console.time('Lee')
quicksort(array)
console.timeEnd('Lee')

