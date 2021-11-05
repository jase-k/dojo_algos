//Is Pangram
// Given a string, return true or false whether or not the string is a pangram
// Pangram: A sentence that contains every letter in the alphabet at least one time

function isPangram(string){
    // create a new set
    let newSet = new Set();
    // format string to lowercase
    string = string.toLowerCase();

    // loop through the string
    let regex = /[a-z]/
    for(let i = 0; i < string.length; i++){
        // if character is /[a-z][A-Z]/ then add to set
        if(regex.test(string[i])){
            newSet.add(string[i])
        }
    }
    // if set size is 26 return true
    if(newSet.size === 26){
        return true
    }
    else{
        return false
    }
}

console.log(isPangram("The quick brown947876134876 fox jumps over a lazy dog"))
console.log(isPangram("Sphinx of black quartz, judge my vow"))
console.log(isPangram("Pack my box with five dozen liquor jugs"))
console.log(isPangram("Hello world"))
