// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr){
    for(var i = 0; i < arr.length; i++){
        var leftsum = 0;
        var rightsum = 0;
        for(var j = 0; j < i; j++){
            leftsum += arr[j]
        }
        for(var k = i; k < arr.length; k++){
            rightsum += arr[k]
        }
        if(leftsum == rightsum){
            return true
        };
    }
    return false
}

// function recursiveBalancePoint(arr, left = 0, right = arr.length){
//     var balancePoint = Math.floor(((right-left)/2)+left)
//     var rightsum = 0
//     var leftsum = 0

//     for(var i = 0; i <= balancePoint; i++){
//         leftsum += arr[i]
//     }
//     for(var i = balancePoint+1; i < arr.length; i++){
//         rightsum += arr[i]
//     }

//     if(leftsum == rightsum){
//         return true
//     }
//     if((balancePoint-left ) == 1 || ri){
//         return false
//     }
//     if(leftsum > rightsum){
//         console.log("Left Side Bigger")
//         return recursiveBalancePoint(arr, left, right/2)
//     }
//     else{
//         console.log("Right Side Bigger")
//         return recursiveBalancePoint(arr, balancePoint, right)
//     }

// }
// console.log(recursiveBalancePoint([1,2,3,4,10])) // TRUE
// // ---> 1+2+3+4 = 10     10 == 10 so balanced
// console.log(recursiveBalancePoint([1,2,3,2,1])) // FALSE
// console.log(recursiveBalancePoint([1,2,3,1,2,3,2,1])) // FALSE
// console.log(recursiveBalancePoint([2,2])) // TRUE

function balanceIndex(arr, left = 0, right = arr.length) {
    var balancePoint = Math.floor(((right - left)/2) + left);
    var leftSum = 0;
    var rightSum = 0;
    if(arr.length <= 2) {
        return false;
    }
    for(var i = 0; i < balancePoint; i++){
        leftSum += arr[i]
    }
    for(var i = balancePoint + 1; i < arr.length; i++) {
        rightSum += arr[i]
    }

    if(leftSum === rightSum)  {
        return true;
    }
    if(right - left <= 1) {
        return false;
    }
    
    if(leftSum > rightSum) {
        return balanceIndex(arr, left, right/2) 
    }
    else {
        return balanceIndex(arr, balancePoint, right)
    }
}

console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
console.log(balanceIndex([9,9])) // FALSE
console.log(balanceIndex([4,2,2,6])) // TRUE
console.log(balanceIndex([9,1,9])) // TRUE
console.log(balanceIndex([1,8,1,2,3,4])) // TRUE