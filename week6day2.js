// Greatest Common Factor
// Given two integers, create recursiveGreatestCommonFactor(num1, num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:


// 1) if num1 === num2, that number is the greatest common factor;

// 2) if a>b, then you can remove b from a, which gets you closer to the GCF;

// 3) if b>a, then you can remove a from b, which gets you closer to the GCF;
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF ’s reach. You should be able to compute rGCF(123456,987654) .

function recursiveGreatestCommonFactor(num1,num2){
    // console.log(`Num 1: ${num1}, Num 2: ${num2}`)
    if(num1 == num2){
        return num1
    }
    if(num1 > num2){
        return recursiveGreatestCommonFactor(num1-num2, num2)
    }
    if(num1 < num2){
        return recursiveGreatestCommonFactor(num1, num2-num1)
    }
}

console.log(recursiveGreatestCommonFactor(50,180)); // 10
console.log(recursiveGreatestCommonFactor(7,35)); // 7
console.log(recursiveGreatestCommonFactor(65,95)); // 5



// Write a function that, given a sorted array and a value, determines whether the value is found within the array through recursively searching. Binary Search works by checking whether the value given is greater than or less than a midway point, which is why the given array must be sorted. Also, even though there's only an array and value given, you can add additional parameters to your function.
// val = 9
// [1,2,3,5,7,9,10  |     11,13,14,15,56,78] <----- 9 is less than halfway so now you can search the left side only
// [1,2,3,5,   |    7,9,10] <------  9 is greater than halfway so you can search the right side only
// [7,   |    9,10] <------ depending on where you split,9 is greater than halfway
// [9,     |      10]

var array = [1,2,3,5,7,9,10,11,13,14,15,56,78]

function binarySearch(array, value, counter=0){
    var halfway = Math.floor(array.length/2)
    console.log(`Array: ${array}, Value: ${value}, Counter: ${counter}`)

    if(array[halfway-1] == value && array[halfway] != value){
        return counter + halfway - 1
    }
    if(array[halfway-1] != value && array[halfway] == value){
        return counter + halfway
    }
    if(array.length <= 2){
        if(array[halfway-1] != value && array[halfway] != value){
            return false
        }
    }

    if(array[halfway-1] > value){
        return binarySearch(array.slice(0, halfway), value, counter)
    }
    if(array[halfway] < value){
        counter += halfway
        return binarySearch(array.slice(halfway), value, counter) //slice the last half of array
    }

}

function betterBinarySearch(array, value, counter=0){
    var halfway = Math.floor(array.length/2)
    console.log(`Array: ${array}, Value: ${value}, Counter: ${counter}`)
    
    if(array[halfway] == value){
        return counter + halfway
    }

    if(array.length <= 2){
        if(array[halfway-1] != value && array[halfway] != value){
            return false
        }
        if(array[0] == value){
            return counter 
        }
        if(array[1] == value){
            return counter++
        }
    }

    if(array[halfway] > value){
        return binarySearch(array.slice(0, halfway+1), value, counter)
    }
    if(array[halfway] < value){
        counter += halfway
        return binarySearch(array.slice(halfway), value, counter) //slice the last half of array
    }

}

console.log(betterBinarySearch(array, 2))







