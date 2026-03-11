function average(arr) {

    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }

    return sum / count;
}

let input = prompt("Please enter element of array");
let arr = input.split(",").map(function(item) {
    if (!isNaN(item)) {
        return (+item);
    } else {
        return item;
    }
});

console.log("result:", average(arr));