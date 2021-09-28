// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve, you can also use a counter

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

function parensValid(str) {
    // your code here
    var aparens = 0 // total number: '('
    var bparens = 0 // total number: ')'

    for(var i = 0; i < str.length; i++){ //iterate through the str
        if(str[i] == "(" ){
            aparens++
        }
        if(str[i] == ")" ){
            bparens++
        }
        if(bparens > aparens){
            return false
        }
    }
    if(aparens == bparens){
        return true
    }
    else{
        return false
    }
}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("()()()()()()("));

// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid (returns true/false). 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true
// ({)} --> false

// hint: consider using an array or object to solve, you can also use a counter

function bracesValid(str) {
    // your code here
      // your code here
    var aparens = 0 // total number: '('
    var bparens = 0 // total number: ')'
    
    var abrace = 0 // total number: '{'
    var bbrace = 0 // total number: '}'

    
    var abracket = 0 // total number: '['
    var bbracket = 0 // total number: ']'

    for(var i = 0; i < str.length; i++){ //iterate through the str
        if(str[i] == "(" ){
            aparens++
        }
        else if(str[i] == ")" ){
            bparens++
            if(!lookBackwards(str, i)){
                return false
            }
        }
        else if(str[i] == "["){
            abracket++
        }
        else if(str[i] == "]"){
            bbracket++
            if(!lookBackwards(str, i)){
                return false
            }
        }
        else if(str[i] == "{"){
            abrace++
        }
        else if(str[i] == "}"){
            bbrace++
            if(!lookBackwards(str, i)){
                return false
            }
        }

        if(bparens > aparens || bbracket > abracket || bbrace > abrace){
            return false
        }
    }
    if(aparens == bparens && bbrace == abrace && bbracket == abracket){
        return true
    }
    else{
        return false
    }
}
//look backwards through string to validate
function lookBackwards(str, index){
    // starting with index look backwards
    var aparens = 0 // total number: '('
    var bparens = 0 // total number: ')'
    
    var abrace = 0 // total number: '{'
    var bbrace = 0 // total number: '}'

    
    var abracket = 0 // total number: '['
    var bbracket = 0 // total number: ']'

    var endType = ""
    if(str[index] == "}"){
        endType = "brace"
    }
    else if(str[index] == "]"){
        endType = "bracket"
    }
    else if(str[index] == ")"){
        endType = "paren"
    }

    var frontType = ""

    for(var i = index; i >= 0; i--){
        // if a open backet/brace/paren of a different type does not have a matching end bracket/brace/paren then return false. 
        if(str[i] == "(" ){
            aparens++
            frontType = "paren"
            if(endType == frontType){
                break;
            }
        }
        else if(str[i] == ")" ){
            bparens++
        }
        else if(str[i] == "["){
            abracket++
            frontType = "bracket"
            if(endType == frontType){
                break;
            }
        }
        else if(str[i] == "]"){
            bbracket++
        }
        else if(str[i] == "{"){
            abrace++
            frontType = "brace"
            if(endType == frontType){
                break;
            }
        }
        else if(str[i] == "}"){
            bbrace++
        }
    }

    if(endType == "brace"){ //{{{}}}
        if(bbracket == abracket && bparens == aparens){
            return true
        }
        else{
            return false
        }
    }
    else if(endType == "paren"){
        if(bbracket == abracket && bbrace == abrace){
            return true
        }
        else{
            return false
        }
    }
    else if(endType == "bracket"){
        if(bparens == aparens && bbrace == abrace){
            return true
        }
        else{
            return false
        }
    }

}


console.log(bracesValid("({[({})]})"));
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));
console.log(bracesValid("[({{}[])}]")) // should be false