// ¡¡Usar expresión regular!! https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

// Un pin puede tener 4 o 6 dígitos: "1234"   -->  true
// "12345"  -- > false
// "a234"   -- > false

function validatePIN(pin) {
    //return true or false
    let pinPattern = /^[0-9]{4}$|^[0-9]{6}$/
    return pinPattern.test(pin)
}

console.log(validatePIN("1"), false, "Wrong output for '1'")
console.log(validatePIN("12"), false, "Wrong output for '12'")
console.log(validatePIN("123"), false, "Wrong output for '123'")
console.log(validatePIN("12345"), false, "Wrong output for '12345'")
console.log(validatePIN("1234567"), false, "Wrong output for '1234567'")
console.log(validatePIN("-1234"), false, "Wrong output for '-1234'")
console.log(validatePIN("1.234"), false, "Wrong output for '1.234'")
console.log(validatePIN("-1.234"), false, "Wrong output for '-1.234'")
console.log(validatePIN("00000000"), false, "Wrong output for '00000000'")
console.log(validatePIN("123A"), false, "Wrong output for '123A'")
console.log(validatePIN("1234"), true, "Correct output for '1234'")
console.log(validatePIN("123456"), true, "Correct output for '123456'")