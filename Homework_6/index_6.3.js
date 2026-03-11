let inputArray = prompt("Please enter number to array");

let array = inputArray.split(",").map(Number);

let itemToRemove = +prompt("What numbers to delete?");


function removeElement(array, item) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === item) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

let result = removeElement(array, itemToRemove);
console.log("Result is:", result);