import React from 'react';
import Text from './Text';

const Empty = ({ style = {}, desc = '暂无数据' }) => {
  return (
    <div
      className="Empty"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 16,

        padding: 12,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <Text>{desc}</Text>
    </div>
  );
};

export default Empty;
