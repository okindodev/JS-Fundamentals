const arg = process.argv.slice(2);
const num = parseInt(arg[0]);
if (Number.isInteger(num)){
for (let i=0;i<num;i++){
console.log('C is fun');}}
else {console.log('Missing number of occurrences')}
