import VisualFibonacci from './VisualFibonacci.js';

const newFib = n => {
  n = n || prompt('New Fibonacci');
  document.getElementById('draw').innerHTML = '';
  const visualFibonacci = new VisualFibonacci(n);
  visualFibonacci.render();
};

newFib(16);

document.getElementById('number').addEventListener('click', () => {
  newFib();
});
