const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-'];
let allowedSymbols = []
let string = "";
allowedSymbols = allowedSymbols.concat(lowercase, uppercase);
const passwordlenght = +prompt("Введите длину пароля:");
const numbers1 = confirm("Do you want some nuber?:");
const specSymbols = confirm("Do you want some spec symbols?:");

if (numbers1) {
    allowedSymbols.push(numbers)
}
if (specSymbols) {
    allowedSymbols.push(symbols)
}
for (let i = 0; i < passwordlenght; i++) {
    const randomIndex = Math.floor(Math.random() * allowedSymbols.length);
    const randomChar = allowedSymbols[randomIndex];
    string += randomChar;

}
alert(string);

