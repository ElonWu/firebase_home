import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Text from './Text';

const ButtonBase = styled.div`
  all: unset;
  &:disabled {
    cursor: not-allowed;
  }
  height: auto;
  display: inline-grid;
  place-items: center;
  padding: 8px 18px;
  border-radius: 18px;
  cursor: pointer;
  background-image: linear-gradient(180deg, #fec946 0%, #ff9315 100%);
`;

const Button = React.forwardRef(({ children, ...rest }, ref) => (
  <ButtonBase {...rest} ref={ref}>
    <Text
      style={{
        display: 'inline-block',
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
      }}
    >
      {children}
    </Text>
  </ButtonBase>
));

export default Button;
