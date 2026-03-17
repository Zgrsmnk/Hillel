function getCounter() {
    let count = 0;

    return function (number) {
        count += number;

        return count;
    }
}

const counter = getCounter();

console.log(counter(4));
console.log(counter(6));
console.log(counter(10));
console.log(counter(7));

