let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function getSum(obj) {
  let sum = 0;

  for (let key in obj) {
    let value = obj[key];

    if (Array.isArray(value)) {
      for (let employee of value) {
        sum += employee.salary;
      }
    } else {
      sum += getSum(value);
    }
  }

  return sum;
}

const totalSum = getSum(company);
console.log(totalSum);
