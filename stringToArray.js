let sentence = "Hi everybody, welcome to week two      "

const stringToArray = (string) => {
    let regex = /[a-zA-Z0-9]/
    let array = [""]
    for(let i =0; i < string.length; i++){
        if(regex.test(string[i])){
            //conctanate a string
            array[array.length-1] += string[i]
        }
        else{
            if(array[array.length-1] !== ''){
                array.push('')
            }
        }
    }
    if(array[array.length-1] == ''){
        array.pop()
    }
    
    return array
} 

console.log(stringToArray(sentence))

