function getNum() {
    let number = '';

    for (let i = 0; i < 10; i++){
        number = +prompt("Please enter a number more 100");
        
        if (number > 100) {
            return number;
        }
    }
}

const result = getNum();
if (result !== undefined) {
    console.log(result);
}