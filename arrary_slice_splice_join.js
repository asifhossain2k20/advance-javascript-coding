
const numbers=[10,20,30,40,50,60,70];

const cutElement=numbers.slice(2,4);
console.log(cutElement);
console.log(numbers);

const outElement=numbers.splice(2,2,99,77);
console.log(outElement); // cut and element
console.log(numbers);


const joinElement=numbers.join(" ");
console.log(joinElement); //output as String