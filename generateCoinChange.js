function generateCoinChange(float) {
    //convert cents to whole number
    float = float * 100
    var output = []
    
    while(float){   //Runs the loop until float =0  for no more change possible
        if(float/25 >= 1){ //finding the amount of quarters used. 
            var quarters = Math.floor(float/25)
            float = float%25
            if(quarters > 1){ // checking for plurals
                end = "s"
            }
            else{
                end =  ""
            }
            output.push(`${quarters} quarter${end}`)
        }
        else if(float/10 >= 1){ // finding the amount of dimes
            var dimes = Math.floor(float/10)
            float = float%10
            if(dimes > 1){
                end = "s"
            }
            else{
                end =  ""
            }
            output.push(`${dimes} dime${end}`)
        }
        else if(float/5 >= 1){ // finding the amount of nickels
            var nickels = Math.floor(float/5)
            float = float%5
            if(nickels > 1){
                end = "s"
            }
            else{
                end =  ""
            }
            output.push(`${nickels} nickel${end}`)
        }
        else{
            var pennies = float
            float = 0
            if(pennies > 1){
                end = 'ies'
            }
            else{
                end = 'y'
            }
            output.push(`${pennies} penn${end}`)// adds pennies to the array 
        }
    }
    return output.join(", ") //Joins the output arrary with correct formatting. 
    
}

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies
console.log(generateCoinChange(0.41)) // 1 quarter, 1 dime, 1 nickel, 1 penny