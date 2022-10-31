const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let passwordLength = 12

function getRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generate() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomChar()
    }
    return randomPassword
}

// const generatedPassword1 = generate()
// const generatedPassword2 = generate()

function passwords() {
    password1.textContent = generate()
    password2.textContent = generate()
}