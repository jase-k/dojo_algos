// Create a function that, given a string, returns the string's acronym as a string (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

function acronym(str) {
    // your code here
    var acr = ""
    //iterate through string
    for(var i = 0; i < str.length; i++){
        //character after space is part of the acronym
        if(str[i] == " " && str[i+1] !== " " && str[i+1] !== undefined){
            acr += str[i+1]
        }

        if(i == 0 && str[i] !== " "){
            acr += str[i]
        }
    }
    //first character would be apart of the acronym. 
    return acr.toLocaleUpperCase()
}

//acronym("there's no free lunch - gotta pay yer way")
console.log(acronym(" there's no free lunch -         gotta pay yer way "));



// Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    // your code here
    var newstr = ""
    for(var i = str.length-1; i >= 0; i--){
        newstr += str[i]
    }
    return newstr
}

console.log(reverseString("creature")); // "erutaerc"