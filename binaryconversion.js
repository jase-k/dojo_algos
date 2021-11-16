const integerToBinary = (num) => {
    let binary = ''

    for(let i = Math.floor(Math.log2(num)); i >= 0; i--){
        if(num >= Math.pow(2, i)){
            num -= Math.pow(2, i)
            binary += '1'
        } else {
            binary +='0'
        }
        if(i%4 === 0){
            binary += ' '
        }
    }

    return binary
}


console.log(integerToBinary(1909))

const binaryToDecimal = (bin) => {
    let decimal = 0 
    bin = bin.toString()
    console.log(bin.length)
    for(let i = 0; i < bin.length; i++){
        bin[i] == 1 ? decimal += Math.pow(2, bin.length-i-1) : ''
    }
    return decimal
}

console.log(binaryToDecimal(101100))
console.log(binaryToDecimal(11001))
console.log(binaryToDecimal(1101001))
console.log(binaryToDecimal(1101001))