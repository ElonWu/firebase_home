import React, { useMemo } from 'react';
import styled from 'styled-components';

const Text = styled.p(({ theme, ellipsis }) => {
  const ellipsisStyle = useMemo(() => {
    if (!ellipsis) return ``;

    // 多行省略
    if (typeof ellipsis === 'number' && ellipsis >= 2) {
      return `
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: ${ellipsis};
            -webkit-box-orient: vertical;
            word-break: break-all;
          `;
    }

    // 单行省略
    return `
          // width: 100%;
          // overflow: hidden;
          // text-overflow: ellipsis;
          // white-space: nowrap;
  
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          word-break: break-all;
        `;
  }, [ellipsis]);

  return `
      color: ${theme === 'dark' ? '#fff' : '#0F1128'};
      font-size: 14px;
      ${ellipsisStyle};
  `;
});

export default Text;
