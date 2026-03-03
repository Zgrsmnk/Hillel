const birthYear = prompt("Please enter your birth year");
if (birthYear === null) {
    alert("It's a pity you didn't enter your birth year.");
}
const sport = prompt("Please enter your favotite sport");
if (sport === null) {
    alert("It's a pity you didn't enter your birth year.");
}
const city = prompt("In which city do you live?");
if (city === null) {
    alert("It's a pity you didn't enter your birth year.");
}



const currentYear = new Date().getFullYear();
const userAge = currentYear - birthYear;

let message;

if (city.toLowerCase() === "kyiv") {
    message = "You live in the capital of Ukraine";
} else if (city.toLowerCase() === "washington") {
    message = "You live in the capital of USA";
} else if (city.toLowerCase() === "london") {
    message = "You live in the capital of GB";
} else {
    message = `You live in ${city}`;
}

alert(`Your age: ${userAge}, ${message}, Your favorite sport is: ${sport}.`);


const sports = prompt("Please enter your favorite sport");

let sportMessage;

if (sports.toLowerCase() === "football") {
    sportMessage = "Cool! Do you want to be like Cristiano Ronaldo?";
} else if (sports.toLowerCase() === "boxing") {
    sportMessage = "Cool! Do you want to be like Alexander Usik?";
} else if (sports.toLowerCase() === "basketball") {
    sportMessage = "Cool! Do you want to be like Michael Jordan?";
} else {
    sportMessage = `You like ${sports}? Cool!`;
}

alert(`${sportMessage}`)