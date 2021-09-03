import { render, screen } from '@testing-library/react';
import App from './App';

test('adds when \'+\' button is clicked', () => {
  render(<App />);
  const plusButton = screen.getByTestId('plus');
  plusButton.click();
  const count = screen.getByTestId('count');
  expect(count.textContent.trim()).toBe('Count: 1');
  plusButton.click();
  expect(count.textContent.trim()).toBe('Count: 2');
});

test('subtracts when \'-\' button is clicked', () => {
  render(<App />);
  const minusButton = screen.getByTestId('minus');
  minusButton.click();
  const count = screen.getByTestId('count');
  expect(count.textContent.trim()).toBe('Count: -1');
  minusButton.click();
  expect(count.textContent.trim()).toBe('Count: -2');
});

test('adds and subtracts', () => {
  render(<App />);
  const plusButton = screen.getByTestId('plus');
  plusButton.click();
  const count = screen.getByTestId('count');
  expect(count.textContent.trim()).toBe('Count: 1');
  plusButton.click();
  expect(count.textContent.trim()).toBe('Count: 2');
  const minusButton = screen.getByTestId('minus');
  minusButton.click();
  expect(count.textContent.trim()).toBe('Count: 1');
  plusButton.click();
  expect(count.textContent.trim()).toBe('Count: 2');
  minusButton.click();
  minusButton.click();
  expect(count.textContent.trim()).toBe('Count: 0');
});

test('multiplies by 2 when \'x2\' button is clicked', () => {
  render(<App />);
  const plusButton = screen.getByTestId('plus');
  plusButton.click();
  // count: 1
  const timesTwoButton = screen.getByTestId('double');
  timesTwoButton.click();
  const count = screen.getByTestId('count');
  expect(count.textContent.trim()).toBe('Count: 2');
  timesTwoButton.click();
  expect(count.textContent.trim()).toBe('Count: 4');
});

test('adds, subtracts, multiplies, and sets to zero', () => {
  render(<App />);
  const plusButton = screen.getByTestId('plus');
  const minusButton = screen.getByTestId('minus');
  const timesTwoButton = screen.getByTestId('double');
  const toZeroButton = screen.getByTestId('to-zero');
  const count = screen.getByTestId('count');

  plusButton.click();
  expect(count.textContent.trim()).toBe('Count: 1');
  plusButton.click();
  expect(count.textContent.trim()).toBe('Count: 2');
  minusButton.click();
  expect(count.textContent.trim()).toBe('Count: 1');
  plusButton.click();
  expect(count.textContent.trim()).toBe('Count: 2');
  plusButton.click(); // count = 3
  timesTwoButton.click();
  expect(count.textContent.trim()).toBe('Count: 6');
  toZeroButton.click();
  expect(count.textContent.trim()).toBe('Count: 0');
});
