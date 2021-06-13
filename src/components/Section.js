import { useMediaQuery } from '@/hooks/MediaQuery';
import React from 'react';

import styled from 'styled-components';

/**
 * 组件
 */
import Text from './Text';
import Title from './Title';

const Section = React.forwardRef(({ children, theme, title }, ref) => {
  const [isMobile] = useMediaQuery();
  return (
    <div
      ref={ref}
      className="Section"
      style={{
        width: '100%',
        minWidth: isMobile ? '100%' : 1160,
        padding: '12px 0',
        backgroundColor: '#f5f5f5',
      }}
    >
      <SectionTitle>
        <Title
          style={{ textAlign: 'center', fontSize: isMobile ? 20 : 42 }}
          theme={theme}
        >
          {title}
        </Title>
      </SectionTitle>

      {children}
    </div>
  );
});

export default Section;

const SectionTitle = styled.div`
  display: grid;
  gap: 12px;
  place-content: center;

  position: relative;

  &::after {
    content: '';

    width: 90px;
    margin: auto;
    height: 4px;
    border-radius: 2px;
    background: #ffb62b;
  }
`;
