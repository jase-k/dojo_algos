//instructions: Given a string, create a function that returns to you a new array containing only the latest instance of each letter from the sentence, without any duplicates. Make it case sensitive first so 'S' and 's' are not considered duplicates

// function dedupeStr(str){
//     let result = []
//     for(let i = 0; i < str.length; i++){
//         //if char not in array. Push to array
//         let idx = result.findIndex((char)=> char == str[i])
//         // console.log(idx)
//         if( idx == -1){
//             result.push(str[i])
//         }
//         else{
//             //if char in the array take that char and put it at the end. 
//             result.push(result.splice(idx, 1)[0])
//         }
//     }
//     return result
// }
function dedupeStr(str){
    let result = []
    for(let i = str.length-1; i > -1; i--){
        let idx = result.findIndex((char)=> char == str[i])
        if( idx == -1){
            result.unshift(str[i])
        }
    }
    return result
}

console.log(dedupeStr("Snaps! crackles! pops!"))// ['S', 'n', 'r', 'a', 'c', 'k', 'l', 'e', ' ', 'o', 'p', 's', '!' ]