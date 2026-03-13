let contactBook = {

    contacts: [
        { name: "Ivan", phone: "095-261-72-83", email: "userIvan@gmail.com" },
        { name: "Petya", phone: "066-290-12-43", email: "userPetya@gmail.com" },
        { name: "Dima", phone: "050-270-53-00", email: "userDima@gmail.com" }
    ],

    findContact: function (name) {
        for (let i = 0; i < contactBook.contacts.length; i++) {
            if (contactBook.contacts[i].name === name) {
                return contactBook.contacts[i];
            }
        }
        return null;
    },

    addingContact: function () {
        let newName = prompt("Please enter your name");
        let newPhone = prompt("Please enter your phone");
        let newEmail = prompt("Please enter your email");

        let newContact = {
            name: newName,
            phone: newPhone,
            email: newEmail
        };

        contactBook.contacts.push(newContact);
        alert("contact Added");
    }
}

contactBook.addingContact();

let searchUserName = prompt("Please enter the name");
let foundUser = contactBook.findContact(searchUserName);

if (foundUser) {
    alert(`Name: ${foundUser.name}, Phone: ${foundUser.phone}, Email: ${foundUser.email}`);
} else {
    alert("Not found");
}

console.log(contactBook.contacts);