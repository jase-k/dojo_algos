// function rotateString(str,num){
//     return str.slice(num*-1) + str.slice(0, (num*-1))
// }
function rotateString(str, num){
    let newStr = ""
    for(let i = str.length-num; i < str.length; i++){
        newStr += str[i]
    }
    for(i =0; i < str.length-num; i++){
        newStr += str[i]
    }
    return  newStr 
}


console.log(rotateString("hello", 2)) //"lohel"
console.log(rotateString("steph curry is best shooter of all time", 4)) //"timesteph curry is best shooter of all"
console.log(rotateString("them roots tho", 6)) //"ts thothem roo"



//bonus- isRotation-->given two strings, return a boolean on if they are rotations of one another
function isRotation(str1, str2){
    for(let i = 0; i < str1.length; i++){
        let newStr = rotateString(str2, i)
        if(str1 == newStr){
            return true
        }
        console.log(newStr)
    }
    return false
}

console.log(isRotation("hello", "lohel")) //true
console.log(isRotation("abcd", "dacc")) //false

