let rate = 26;

for (let dollar = 10; dollar <= 100; dollar += 10) {
    let hryvnia = dollar * rate;
    console.log(dollar + " USD = " + hryvnia + " UAN");
}