var big = [
    [67,34,45,56],
    [87,87,76,67],
    [56,67,78,89],
    [54,43,32,21]
];

var small = [
    [87, 76],
    [67,78],
];

var anotherSmall = [
    [67,7],
    [43,32]
];

function matrixSearch(larger, smaller) {
    if(smaller.length == 0){
        return false;
    }
    loop1: 
    for(var i = 0; i < larger.length; i++){
    loop2:  
        for(var j = 0; j< larger[i].length; j++){
            if(larger[i][j] == smaller[0][0]){
    loop3:  
                for(var k = 0; k < smaller.length; k++){
    loop4:  
                    for(var l = 0; l < smaller[k].length; l++)
                        if(larger[i+k][j+l] != smaller[k][l]){
                            continue loop2;
                        }
                }

            return true
            }
        }
    }
    return false
}
console.log(matrixSearch(big, small))
console.log(matrixSearch(big, [[]]))


console.log(matrixSearch(big,small));
console.log(matrixSearch(big,anotherSmall));