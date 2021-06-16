import React from 'react';
import Button from '../index';

export default {
  title: 'Components/Base/Button',
  component: Button,
};

export const Small = () => <Button style={{ padding: '8px 20px' }}>123</Button>;

export const Large = () => (
  <Button style={{ padding: '16px 40px' }}>123</Button>
);
