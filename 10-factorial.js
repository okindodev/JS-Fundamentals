const arg = process.argv.slice(2);
const num = parseInt(arg[0]);
function factorial(n) {
  if (isNaN(n) || n < 0) {
    return 1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));
