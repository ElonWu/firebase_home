import React from 'react';
import styled, { keyframes } from 'styled-components';

/**
 * 动画
 */

export const ripple = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(0);
  }

  30% {
    opacity: 0.4;
    transform: scale(1);
  }

  90% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

export const bouncing = keyframes`
  0% {
    transform: translate(0, 0px) scale(1.1, 0.75);
  }

  25% {
    transform: translate(0, 10px) scale(0.9, 1.1);
  }

  55% {
    transform: translate(0, 40px) scale(0.7, 1.12);
  }

  90% {
    transform: translate(0, 125px) scale(0.5, 1.15);
  }

  100% {
    transform: translate(0, 135px) scale(1.2, 0.4);
  }
`;

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(#565656, #363636);
  display: grid;
  place-content: center;
`;

const Dot = styled.span`
  width: 200px;
  height: 200px;
  //   border-radius: 4px;
  //   background: #44444499;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10%;
    left: calc(50% - 10px);
    background: #fff;
    border-radius: 50%;
    animation: ${bouncing} 0.5s linear infinite alternate both;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    width: 70px;
    height: 20px;
    left: calc(50% - 35px);
    background: radial-gradient(closest-side, #aaa, transparent);
    border-radius: 50%;
    transform-origin: center center;
    animation: ${ripple} 1s linear 0.45s infinite both;
  }
`;

const PageLoading = () => {
  return (
    <Mask>
      <div
        className="PageLoading"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Dot />
      </div>
    </Mask>
  );
};

export default PageLoading;
