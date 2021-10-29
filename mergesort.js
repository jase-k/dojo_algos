var array = [ 2, 12,3 ,45,32,57,86,43,12,435,6,4,43,45,56,78 ]
// var array = [6,2,7,4,5,6,7,8]

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}



function tournamentSimulation(array){
    var rounds = getBaseLog(2, array.length)
    var half = Math.floor((array.length-1)/2)
    //Split the array until down to 2 in each array. 


    if(array.length == 2){
        //compare values. If greater than, move back if less than move forward
        if(array[0] < array[1]){
            return [array[0], array[1]]
        }
        else{
            return [array[1], array[0]]
        }
    }
}

// return an array of arrays with 2 values. 
function splitArray(array){
    // console.log("running split array", array)
    var half = Math.floor((array.length)/2)
    if(half <= 1){
        if(array[0] > array[1]){
            return [array[1], array[0]]
        }
        else{
            return array
        }
    }
    array.push(splitArray(array.splice(0,half)))
    array.push(splitArray(array.splice(0,half)))
    

    return array
}
function combineArray(arrayofArrays){
    // console.log("Combining Arrays: ", arrayofArrays)
    if(typeof(arrayofArrays[0][0]) != 'object'){
        var newArray = [];
        while(arrayofArrays[0].length != 0 || arrayofArrays[1].length != 0){
            if(arrayofArrays[0][0] < arrayofArrays[1][0] || arrayofArrays[1][0] == undefined){
                newArray.push(arrayofArrays[0].shift())
            }
            else{
                newArray.push(arrayofArrays[1].shift())
            }
        }
        return newArray
    }
    
    var finalArray = combineArray([combineArray(arrayofArrays[0]), combineArray(arrayofArrays[1])])

    return finalArray
    
}
function mergesort(array){
    return combineArray(splitArray(array))
}

// console.log(mergesort(array))
// console.log(combineArray([[2,6],[3,4]]))
// console.log()

    // compare two arrays. the 4th value at the end of the comparison has lost twice and is eliminated. 

    //compare two arrays of 3 the 4th value and back have been eliminated. 

    //continue until you have 3 values remaining

    //the 2nd and 3rd value compare 

    var array = [ 2, 12,3 ,45,32,57,86,43,12,435,6,4,43,45,56,78 ]
    // var array = [ 22, 12,47 ,45 ]

function splitTheArray(array){
    if(array.length < 2){
        return array
    }
    let splitPoint = array.length/2
    return([splitTheArray(array.slice(0,splitPoint)), splitTheArray(array.slice(splitPoint))])
}
function combineTheArray(arrayofarrays){
    if(arrayofarrays[0][0] == undefined){
        return arrayofarrays
    }
    if(typeof (arrayofarrays[0][0]) != 'object'){
        let newArray =[]
        while(arrayofarrays[0].length != 0 || arrayofarrays[1].length != 0){
            if(arrayofarrays[0][0] < arrayofarrays[1][0]){
                if(arrayofarrays[0][0] === undefined){
                    newArray.push(arrayofarrays[0].shift())
                }
                else{
                    newArray.push(arrayofarrays[1].shift())
                }
            }
            else{
                if(arrayofarrays[1][0] === undefined){
                    newArray.push(arrayofarrays[0].shift())
                }
                else{
                    newArray.push(arrayofarrays[1].shift())
                }
            }
        }
        return newArray
    }
    return combineTheArray([combineTheArray(arrayofarrays[0]), (combineTheArray(arrayofarrays[1]))])
}

function mergesort(array){
    let arrayofarrays = splitTheArray(array)
    // console.log(arrayofarrays)
    return combineTheArray(arrayofarrays)
}
array = []
for(let i = 0; i < 1000; i++){
    array.push(Math.floor(Math.random()*1000))
}
console.time('MergSort 1000x')
mergesort(array)
console.timeEnd('MergSort 1000x')