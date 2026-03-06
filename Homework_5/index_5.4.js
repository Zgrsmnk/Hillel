let num = +prompt("Please enter a number");
let isPrime;

if (num <= 1) {
    console.log("Непросте число");
} else {
    isPrime = true;
}

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Просте число");
} else {
    console.log("Непросте число");
}