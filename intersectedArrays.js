//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []
console.log(1>undefined)


const intersect = (arrLeft, arrRight) => {
    let a = 0
    let b = 0
    let newArray = []

    while(a < arrLeft.length && b < arrRight.length){
        if(arrLeft[a] === arrRight[b]){
            newArray.push(arrRight[b])
            a++
            b++
            continue
        }

        if(arrLeft[a] > arrRight[b]){
            b++
        }
        else{
            a++
        }
    }
    return newArray
}

console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
console.log(intersect([-9, 1, 3, 4, 4, 4, 4, 4, 4, 5, 7], [-5, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, 7]));

//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const union = (arrLeft, arrRight) => {
    let a = 0
    let b = 0
    let newArray = []

    while(a < arrLeft.length || b < arrRight.length){
        if(arrLeft[a] === arrRight[b]){
            newArray.push(arrRight[b])
            a++
            b++
            continue
        }
        
        if(arrLeft[a] > arrRight[b] || a >= arrLeft.length){
            newArray.push(arrRight[b])
            b++
        }
        else{
            newArray.push(arrLeft[a])
            a++
        }
    }
    return newArray
}

console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(union([1,2,2,2,7],[2,2,6,6,7]));
console.log(union([1,5,9],[2,6,10]));
console.log(union([2,6,10],[1,5,9]));