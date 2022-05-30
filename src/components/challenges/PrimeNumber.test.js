import { render, screen } from '@testing-library/react';
import { isPrime, zeroToHungred } from './PrimeNumber';

describe('isPrime', () => {
  test('should be prime', () => {
    const expected = true;
    const result = isPrime(13);
    expect(result).toStrictEqual(expected);
  });

  test("shouldn't be prime", () => {
    const expected = false;
    const result = isPrime(20);
    expect(result).toStrictEqual(expected);
  });
});

