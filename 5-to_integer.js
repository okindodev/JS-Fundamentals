const arg = process.argv.slice(2);
const number = parseInt(arg[0]);
if (Number.isInteger(number)){
console.log(`My number: ${number}`);}
else {
console.log('Not a number');}
