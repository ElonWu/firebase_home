/**
 * @jest-environment jsdom
 */
// 文件加入前缀才能使用 dom

// import React from 'react';

// import { render, cleanup, screen, fireEvent } from '@testing-library/react';

// import Button from '../index';

// describe('测试 Display 组件', () => {
//   afterEach(cleanup);

//   it('检查展示', () => {
//     const { container } = render(<Button>button</Button>);
//     const btn = screen.getByLabelText('button');

//     expect(btn).toHaveTextContent('button');
//   });
// });

it('占位', () => {
  expect(1 + 1).toBe(2);
});
