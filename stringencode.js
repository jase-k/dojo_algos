//encode--> given a string with repeating consecuctive characters, give a number for each number of repeats next to the letter
//example ---> aaabccccdd -> a3b1c3d2
const encode = (str)=>{
    let output = ""
    let counter = 1

    for(let i =0; i < str.length; i++){
        
        if(str[i] === str[i-1]){
            counter++
        }
        else{
            i !== 0 ? output += counter : "" ;
            output += str[i]
            counter = 1
        }
    }
    output += counter
    return output
}

console.log(encode("aaabccccdd")) //a3b1c3d2


//decode--> given an encoded string, decode it
//example ---> a2b3c1---> aabbbc

const decode = (str)=>{
    let output = ""
    let numCheck = /[0-9]/
    let i = 0
    while( i < str.length){
        if(!numCheck.test(str[i])){
            output += str[i]
            i++
        }
        if(numCheck.test(str[i])){
            let num = ""
            while(numCheck.test(str[i])){
                num += str[i]
                i++
            }
            for(let j = 0; j < parseInt(num)-1; j++){
                output += output[output.length-1]
            }
        }
    }
    return output
}

console.log(decode("a12b3c1")) //aaaaaaaaaaaabbbc