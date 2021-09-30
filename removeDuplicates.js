// Remove Dupes
// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

// function removeDupe(arr) {
//     return new Set(arr)
// }
// function removeDupe(arr) {
//     //create a second array to evaluate: 
//     var arr2 = [];
//     var i = 0; 
//     var contains = false;
// //     //loop through original and compare to each of the arr2:
//     while(i != arr.length){
//         for(var j = 0; j < arr2.length; j++){
//             if(arr[i] == arr2[j]){
//                 contains = true
//                 break;
//             }
//         }
//         if(contains){
//             arr.splice(i, 1)
//         }
//         else{
//             arr2.push(arr[i])
//             i++
//         }
//         contains = false;
//     }
//     return arr
// }

function removeDupe(arr) {
    return arr.filter((e) => {
            while (arr.indexOf(e) !== arr.lastIndexOf(e)) {
            arr.splice(arr.lastIndexOf(e), 1);
        }
        return e;
        })
}


var array = [1,2,3,4,2,3,4,4,4,4,5,7,8,5,3,9]

console.log(removeDupe(array)); // 1,2,3,4,5,6,7,8,9