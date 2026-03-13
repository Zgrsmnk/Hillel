let userInfo = {
    name: prompt("Please enter your name"),
    age: prompt("Please enter your age"),
    residence: prompt("Please enter your legal residence"),
    getInfo: function () {
        return `User: ${userInfo.name}, Age: ${userInfo.age}, Residence: ${userInfo.residence}`;
    }
};

console.log(userInfo.getInfo());
