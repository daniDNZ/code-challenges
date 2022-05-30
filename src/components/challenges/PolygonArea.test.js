import { Square, Rectangle, Triangle } from './PolygonArea';

describe('Square', () => {
  test('should be an square area', () => {
    const poli = new Square(5);
    const expected = 25;
    const result = poli.area();
    expect(result).toStrictEqual(expected);
  });
  test('should be an rectangle area', () => {
    const poli = new Rectangle(5, 7);
    const expected = 35;
    const result = poli.area();
    expect(result).toStrictEqual(expected);
  });
  test('should be an triangle area', () => {
    const poli = new Triangle(8, 2);
    const expected = 8;
    const result = poli.area();
    expect(result).toStrictEqual(expected);
  });
});

