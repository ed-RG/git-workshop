const getNthFibonacciNumber = (n: number): number => {
  if (n === 1 || n === 2) {
    return 1;
  }

  let prev = 1, curr = 2;
  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

const printNthFibonacciNumber = (n: number): void => {
  console.log(`The ${n}th Fibonacci number is: ${getNthFibonacciNumber(n)}`);
}

export { getNthFibonacciNumber, printNthFibonacciNumber };
