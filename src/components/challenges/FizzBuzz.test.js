import { render, screen } from '@testing-library/react';
import { fibu } from './FizzBuzz';

describe('fibu', () => {

  test('should print fizzbuzz', () => {
    const expected = 'fizzbuzz';
    const result = fibu(15);
    expect(result).toBe(expected);
  });
  test('should print fizz', () => {
    const expected = 'fizz';
    const result = fibu(6);
    expect(result).toBe(expected);
  });
  test('should print buzz', () => {
    const expected = 'buzz';
    const result = fibu(10);
    expect(result).toBe(expected);
  });
  test('should print the number', () => {
    const expected = 32;
    const result = fibu(32);
    expect(result).toBe(expected);
  });
});
