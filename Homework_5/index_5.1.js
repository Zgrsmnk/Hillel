let result = "";
for (let i = 20; i <= 30; i += 0.5) {
    result += i < 30 ? `${i},` : i;
}
console.log(result);