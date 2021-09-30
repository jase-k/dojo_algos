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
    console.log("running split array", array)
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
    console.log("Combining Arrays: ", arrayofArrays)
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

console.log(combineArray(splitArray(array)))
// console.log(combineArray([[2,6],[3,4]]))
// console.log()

    // compare two arrays. the 4th value at the end of the comparison has lost twice and is eliminated. 

    //compare two arrays of 3 the 4th value and back have been eliminated. 

    //continue until you have 3 values remaining

    //the 2nd and 3rd value compare 
