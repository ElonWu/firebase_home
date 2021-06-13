import React from 'react';
import styled, { keyframes } from 'styled-components';

import RatioImg from '@/components/RatioImg';
import Card from '@/components/Card';

/**
 * 素材
 */
import activeCode from '@/assets/active_code.png';
import inactiveCode from '@/assets/inactive_code.png';
import Text from './Text';
import { useMediaQuery } from '@/hooks/MediaQuery';

const Scan = ({ width = 320 }) => {
  const [isMobile] = useMediaQuery();
  return (
    <Card style={{ width, background: 'rgb(255 255 255 / 70%)' }}>
      <Text
        ellipsis={2}
        style={{
          textAlign: 'center',
          margin: isMobile ? 'auto' : '12px auto',
          fontSize: 12,
        }}
      >
        请联系方式
      </Text>
      <div
        style={{
          position: 'relative',
          width: 0.7 * width,
          height: 0.7 * width,
          margin: 'auto',
        }}
      >
        <div style={{ padding: 8 }}>
          <RatioImg ratio="1:1" src={inactiveCode} />
        </div>
        <ScanArea style={{ padding: 8 }}>
          <RatioImg ratio="1:1" src={activeCode} />
        </ScanArea>
      </div>
    </Card>
  );
};

const scaleAlternative = keyframes`
  0% {
    bottom: 0%;
  }
  100% {
    bottom: 100%;
  }
`;

const ScanArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0%;
  padding: 8px;
  overflow: hidden;

  animation: ${scaleAlternative} 0.8s cubic-bezier(0.32, -0.04, 0.85, 1.31)
    infinite alternate both;

  &::after {
    content: '';
    height: 10px;
    border-radius: 5px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffb62b;
  }
`;

export default Scan;
