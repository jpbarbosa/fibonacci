import FibonacciSequence from './FibonacciSequence.js';

const directions = ['bottom', 'right', 'top', 'left'];

class VisualFibonacci {
  constructor(n, timeout) {
    this.sequence = new FibonacciSequence(n).sequence;
    this.timeout = timeout;
    this.rotation = 90;
    this.leftCursor = window.innerWidth / 2;
    this.topCursor = window.innerHeight / 2;
    this.previousSize = 0;
  }

  createDiv(index) {
    const fib = this.sequence[index];
    const size = fib;
    //(fib * window.innerWidth) / this.sequence[this.sequence.length - 1];
    const directionStr = directions[index % 4];

    switch (directionStr) {
      case 'bottom':
        this.leftCursor -= size;
        break;
      case 'right':
        this.topCursor += this.previousSize;
        break;
      case 'top':
        this.leftCursor += this.previousSize;
        this.topCursor -= size - this.previousSize;
        break;
      case 'left':
        this.leftCursor -= size - this.previousSize;
        this.topCursor -= size;
        break;
    }

    const indexStr = `Index: ${index}`;
    const fibStr = `Fib: ${fib}`;

    const div = document.createElement('div');
    div.className = 'fib';
    div.style.position = 'absolute';
    div.style.background = 'radial-gradient(at 100% 100%, #000, #0ff)';
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.borderTopLeftRadius = `${size}px`;
    div.style.transform = `rotate(${(this.rotation -= 90)}deg)`;
    div.style.left = `${this.leftCursor}px`;
    div.style.top = `${this.topCursor}px`;
    div.title = `${indexStr}\n${fibStr}`;
    document.getElementById('draw').appendChild(div);

    document.getElementById('number').innerHTML = `${indexStr}<br>${fibStr}`;

    this.previousSize = size;
  }

  render() {
    this.sequence.forEach((fib, index) => {
      if (this.timeout) {
        setTimeout(() => this.createDiv(index), index * this.timeout);
      } else {
        this.createDiv(index);
      }
    });
  }
}

export default VisualFibonacci;
