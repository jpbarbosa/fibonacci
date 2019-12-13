import VisualFibonacci from './VisualFibonacci.js';

let fibStarted = false;

const newFib = (n, timeout) => {
  document.getElementById('draw').innerHTML = '';
  const visualFibonacci = new VisualFibonacci(n, timeout);
  visualFibonacci.render();
  setTimeout(() => {
    fibStarted = true;
  }, 1000);
};

window.onscroll = () => {
  if (fibStarted) {
    let percentage = document.body.scrollTop / window.innerHeight;
    let fib = Math.round(32 * percentage);
    newFib(fib);
  }
};

window.onload = () => {
  setTimeout(() => {
    window.scrollTo(0, window.innerHeight / 2);
    newFib(16, 100);
  }, 1);
};
