import { add } from '../src/index';

describe('testing index file', () => {
  test('testing 1 + 1 ', () => {
    expect(add(1, 1)).toBe(2);
  });
});
