import React from 'react'

// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    const romanNumerals = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]
    if (num === 0) {
        return '';
    }
    for (var i = 0; i < romanNumerals.length; i++) {
        // if the number is larger than the condition
        if (num >= romanNumerals[i][0]) {
        // return the letter and call the function recursively after subtracting the first letter
            return romanNumerals[i][1] + convertToRoman(num - romanNumerals[i][0])
        }
    }
}

function caesarsCipher(stringToDecode) {

    // SERR PBQR PNZC

    const req = stringToDecode.toLowerCase()
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const altAlphabet = "nopqrstuvwxyzabcdefghijklm"
    let altKeys = []
    let decodedString = []
    let keys = []

    // create array of alternate alphabet
    for (let x = 0; x < altAlphabet.length; x++) {
        altKeys.push(altAlphabet.charAt(x))
    }
    
    for (let x = 0; x < req.length; x++) {
        let currentChar = req.charAt(x)
        let charIndex = alphabet.indexOf(currentChar)
        if (currentChar === '!') { // not ideal, but within scope
            keys.push(-2)
        } else if (currentChar === '?') {
            keys.push(-3)
        } else if (currentChar === '.') {
            keys.push(-4)
        } else {
            keys.push(charIndex)
        }
    }

    for (let x = 0; x < keys.length; x++) {
        let currentIndex = keys[x]
        if (keys[x] === -1) {
            decodedString.push(" ")
        } else if (keys[x] === -2) {
            decodedString.push('!')            
        } else if (keys[x] === -3) {
            decodedString.push('?')            
        } else if (keys[x] === -4) {
            decodedString.push('.')            
        } else {
            decodedString.push(altKeys[currentIndex])
        }
    }
    // console.log(decodedString.join("").toUpperCase())
    return decodedString.join("").toUpperCase()
}

function telephoneCheck(str) {

    // const regEx = /\D+/
    const regEx = /^[0-9]/g
    // const regEx = /^[0-9]{10}$|^-$/
    // const regExHyphen = /-/

    if (regEx.test(str) === false){
        console.log('logged')
    }
    const thing = str

    const toRemove = str.match(regEx)
    // console.log(toRemove.index)
    const newish = thing.replace(/[\D+]/g, '')

    


    // console.log(newish)
    if (newish.charAt[0] == '1' && newish.length == 11) {
        console.log('valid')
        return true
    } else if (newish.length == 10) {
        console.log('valid')
        return true
    } else {
        console.log('invalid')
        return false
    }

    
}

function JavaScriptAlgorithmsAndDataStructuresProjects() {
  return (
      <div>
          <h1>Convert Number To Roman</h1>
          <h1>{convertToRoman(777)}</h1>
          <h1>Caesar's Cipher</h1>
          <h1>{caesarsCipher("SERR PBQR PNZC!!!")}</h1>
          <h1>Telephone Check</h1>
          {/* <h1>{telephoneCheck('7f77.7-7?7!77')}</h1> */}
          <h1>{telephoneCheck('6130000000')}</h1>
      </div>
  )
}

export default JavaScriptAlgorithmsAndDataStructuresProjects

// convertToRoman(2) should return the string II.
// Waiting:convertToRoman(3) should return the string III.
// Waiting:convertToRoman(4) should return the string IV.
// Waiting:convertToRoman(5) should return the string V.
// Waiting:convertToRoman(9) should return the string IX.
// Waiting:convertToRoman(12) should return the string XII.
// Waiting:convertToRoman(16) should return the string XVI.
// Waiting:convertToRoman(29) should return the string XXIX.
// Waiting:convertToRoman(44) should return the string XLIV.
// Waiting:convertToRoman(45) should return the string XLV.
// Waiting:convertToRoman(68) should return the string LXVIII
// Waiting:convertToRoman(83) should return the string LXXXIII
// Waiting:convertToRoman(97) should return the string XCVII
// Waiting:convertToRoman(99) should return the string XCIX
// Waiting:convertToRoman(400) should return the string CD
// Waiting:convertToRoman(500) should return the string D
// Waiting:convertToRoman(501) should return the string DI
// Waiting:convertToRoman(649) should return the string DCXLIX
// Waiting:convertToRoman(798) should return the string DCCXCVIII
// Waiting:convertToRoman(891) should return the string DCCCXCI
// Waiting:convertToRoman(1000) should return the string M
// Waiting:convertToRoman(1004) should return the string MIV
// Waiting:convertToRoman(1006) should return the string MVI
// Waiting:convertToRoman(1023) should return the string MXXIII
// Waiting:convertToRoman(2014) should return the string MMXIV
// Waiting:convertToRoman(3999) should return the string MMMCMXCIX