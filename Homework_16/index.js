function Student(first, last, year) {
  this.firstName = first;
  this.lastName = last;
  this.userAge = year;

  studentGrade = new Array(25);

  Object.defineProperties(this, {
    age: {
      get: function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.userAge.getFullYear();
      },
    },
  });

  this.present = function () {};

  this.absent = function () {};
}

const result = new Student("john", "Vazovski", new Date(2003, 2, 13));
console.log(`Name: ${result.firstName} ${result.lastName}, Age: ${result.age}`);
