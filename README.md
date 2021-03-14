# Visual Fibonacci

A visual representation of the Fibonacci sequence using JavaScript.

## Website

https://jpbarbosa.github.io/fibonacci

## Usage

Scroll up/down to change the sequence length:

<a href="https://jpbarbosa.github.io/fibonacci"><img src="https://github.com/jpbarbosa/fibonacci/blob/master/src/VisualFibonacci.gif" width="50%" alt="Visual Fibonacci"></a>

## Sequence Definition

> In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. [Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_number)

## JavaScript Class

```javascript
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
```
