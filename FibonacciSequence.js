class FibonacciSequence {
  constructor(n) {
    this.n = n;
    this.sequence = [];
    this.calculate(n);
  }

  calculate(n) {
    if (this.sequence[n]) {
      return this.sequence[n];
    }
    if (n < 2) {
      this.sequence[n] = n;
    } else {
      this.sequence[n] = this.calculate(n - 1) + this.calculate(n - 2);
    }
    return this.sequence[n];
  }
}

export default FibonacciSequence;
