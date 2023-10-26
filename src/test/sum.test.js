/* eslint-disable no-undef */
import sum from '../sum'; // Adjust the import path based on the file structure

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});