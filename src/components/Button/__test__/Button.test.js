// import { render, cleanup, fireEvent } from '@testing-library/react';

function isValidArray(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

describe('测试 isValidaArray', () => {
  test('非数组', () => {
    expect(isValidArray({ a: 1 })).toBe(false);
  });
  test('空数组', () => {
    expect(isValidArray([])).toBe(false);
  });
  test('有效数组', () => {
    expect(isValidArray([1, 2, 3])).toBe(true);
  });
});
