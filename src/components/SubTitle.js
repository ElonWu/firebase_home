import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.h5(
  ({ theme }) => `
      color: ${theme === 'dark' ? '#fff' : '#0F1128'};
      font-size: 16px;
  `,
);

export default SubTitle;
