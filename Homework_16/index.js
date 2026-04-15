function Student(first, last, year) {
  this.firstName = first;
  this.lastName = last;
  this.userAge = year;

  this.studentAttendance = [];
  this.grades = [];

  Object.defineProperties(this, {
    age: {
      get: function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.userAge.getFullYear();
      },
    },
  });

  this.present = function () {
    const presentEl = true;
    if (this.studentAttendance.length < 25) {
      this.studentAttendance.push(presentEl);
    }
  };

  this.absent = function () {
    const absentEl = false;
    if (this.studentAttendance.length < 25) {
      this.studentAttendance.push(absentEl);
    }
  };

  this.getGrade = function () {
    const sum = this.grades.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);

    return sum / this.grades.length;
  };

  this.getAttendance = function () {
    const getTrue = this.studentAttendance.filter(function (element) {
      return element === true;
    });
    return getTrue.length / this.studentAttendance.length;
  };

  this.summary = function () {
    if (this.getGrade() > 90 && this.getAttendance() >= 0.9) {
      return "Молодець";
    } else if (this.getGrade() > 90 || this.getAttendance() > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска";
    }
  };
}

// student 1
const studentOne = new Student("John", "Vazovski", new Date(2003, 2, 13));

studentOne.grades.push(100, 95, 98, 97, 96, 99, 100, 94, 98, 97);

studentOne.present();
studentOne.present();
studentOne.absent();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();

console.log(
  `Name: ${studentOne.firstName} ${studentOne.lastName},
    Age: ${studentOne.age},
    Result: ${studentOne.summary()}
   `,
);

// student 2
const studentTwo = new Student("Tolia", "Nazarov", new Date(1996, 9, 3));

studentTwo.grades.push(85, 88, 90, 82, 87, 89, 91, 84, 86, 88);

studentTwo.present();
studentTwo.present();
studentTwo.present();
studentTwo.present();
studentTwo.present();
studentTwo.present();
studentTwo.present();
studentTwo.present();
studentTwo.present();
studentTwo.present();

console.log(
  `Name: ${studentTwo.firstName} ${studentTwo.lastName},
    Age: ${studentTwo.age},
    Result: ${studentTwo.summary()}
   `,
);

// student 3
const studentThree = new Student("Oleg", "Kozak", new Date(2000, 7, 11));

studentThree.grades.push(50, 60, 55, 58, 52, 61, 57, 54, 59, 53);

studentThree.present();
studentThree.absent();
studentThree.absent();
studentThree.present();
studentThree.absent();
studentThree.absent();
studentThree.absent();
studentThree.absent();
studentThree.absent();
studentThree.present();

console.log(
  `Name: ${studentThree.firstName} ${studentThree.lastName},
    Age: ${studentThree.age},
    Result: ${studentThree.summary()}
   `,
);
