let string = prompt("Please enter a string");
let charakters = prompt("Please enter a charakters to remove").split('');

function removeChars(string, charakters) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        if (!charakters.includes(string[i])) {
            result += string[i];
        }
    }
    return result;
}

console.log(removeChars(string, charakters));
