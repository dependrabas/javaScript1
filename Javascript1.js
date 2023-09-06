const person1 = { name: 'Dependra'};
const person2 = { name: 'Kuenzang'};
const personData  = new Map([[person1,],[{ date: 'yesterday', price: 10}]]);
console.log(personData);
console.log(personData.get(person1));