const numbers = [4, 5, 7, 6, 9, 13, 18, 22, 1];
const choiseNumber = numbers.filter(function (item) {
    return item % 2 === 0;
});
console.log(choiseNumber);