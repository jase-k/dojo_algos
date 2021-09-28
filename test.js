function getCount(divider, number){// returns an integer of the most possible whole times the divider can go into the number
    var count = 0

    while(divider <= number){
        count++
        number -= divider
    }
    return count

}

function generateCoinChange(float) {
    //convert cents to whole number
    float = float * 100
    var output = ""
    
    if(float/25 >= 1){ //finding the amount of quarters used. 
            var quarters = getCount(25, float)
            float = float%25
            if(quarters > 1){ // checking for plurals
                end = float ? "s, ": "s"
            }
            else{
                end =  float ? ", ": ""
            }
            output += `${quarters} quarter${end}`
        }
     if(float/10 >= 1){ // finding the amount of dimes
            var dimes = getCount(10, float)
            float = float%10
            if(dimes > 1){
                end = float ? "s, ":"s"
            }
            else{
                end =  float ? ", ":""
            }
            output += `${dimes} dime${end}`
        }
    if(float/5 >= 1){ // finding the amount of nickels
            var nickels = 1
            float = float%5
            if(float > 0){
                end =  ", "
            }
            else{
                end =  ""
            }
            output += `${nickels} nickel${end}`
        }
    if(float > 0){
            var pennies = float
            float = 0
            if(pennies > 1){
                end = 'ies'
            }
            else{
                end = 'y'
            }
            output += `${pennies} penn${end}`// adds pennies to the array 
        }
    
    return output 
    
}

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies
console.log(generateCoinChange(0.41)) // 1 quarter, 1 dime, 1 nickel, 1 penny