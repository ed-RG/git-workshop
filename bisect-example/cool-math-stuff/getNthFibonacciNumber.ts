const getNthFibonacciNumber = (n: number): number => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return getNthFibonacciNumber(n - 1) + getNthFibonacciNumber(n - 2);
}

const printNthFibonacciNumber = (n: number): void => {
  console.log(`The ${n}th Fibonacci number is: ${getNthFibonacciNumber(n)}`);
}

export { getNthFibonacciNumber, printNthFibonacciNumber };
