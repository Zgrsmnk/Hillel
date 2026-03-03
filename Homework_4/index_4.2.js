const number = prompt("Please enter a three numbers")

const a = number[0];
const b = number[1];
const c = number[2];

if (a === b && b === c) {
    alert("All digits are the same");
} else if (a === b || a === c || b === c) {
    alert("There are equal digits");
} else {
    alert("all digits are different");
}