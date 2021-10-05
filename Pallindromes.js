// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

function isPallindrome(str) {
    // your code here
    for(var i = 0, j= str.length -1; i < str.length/2; i++, j--){
        if(str[i] !== str[j]){
            return false
        }
    }
    return true
}

console.log(isPallindrome("racecar")); // TRUE
console.log(isPallindrome("e tacocat e")); // TRUE
console.log(isPallindrome("Dud")); // FALSE
console.log(isPallindrome("oho!")); // FALSE
console.log(isPallindrome(" to ")); // FALSE

// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!


function longestPallindrome(str) {
    // your code here
    var longest = ""
    var string = ""
    for(var i = 0; i < str.length; i++){
        j = i-1
        k = i+1

        //checks starting from a double character
        if(str[i] == str[k]){
            string = str[i] + str[k]
            k++
            while(str[j] == str[k] && str[j]){
                string = str[j] + string + str[k]
                k++
                j--
            }
        }
        if(string.length > longest.length){
            longest = string
        }

        //checks starting from single character
        string = str[i]
        while(str[j] == str[k] && str[j]){
            string = str[j] + string + str[k]
            k++
            j--
        }
        if(string.length > longest.length){
            longest = string
        }
    }
    return longest
}



console.log(longestPallindrome("my favorite racecar erupted"));
// Example 1: "my favorite racecar erupted" --> "e racecar e"
console.log(longestPallindrome("nada"));
// Example 2: "nada" --> "ada"
console.log(longestPallindrome("nothing to see"));
// Example 3: "nothing to see" --> "ee"