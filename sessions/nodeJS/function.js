function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function div(a,b){
    return a / b;
}

function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  if (num === 2) return true; // 2 is the only even prime number
  if (num % 2 === 0) return false; // eliminate even numbers

  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
export default {add, sub, mul, div, isPrime}