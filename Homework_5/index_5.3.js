const number = prompt("Please enter a number");

for (let i = 1; i <= 100; i++) {
    if (i ** 2 <= number) {
        console.log(i);
    } else {
        break;
    }
}