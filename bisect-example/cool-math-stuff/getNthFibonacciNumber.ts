const getNthFibonacciNumber = (n: number): number => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return getNthFibonacciNumber(n - 1) + getNthFibonacciNumber(n - 2);
}

export { getNthFibonacciNumber };