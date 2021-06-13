import React from 'react';
import { useHistory } from 'react-router';

import Title from '@/components/Title';
import Text from '@/components/Text';

const Page404 = () => {
  const history = useHistory();

  return (
    <div
      className="Page404"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeContent: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#140c2b',
          borderRadius: '50%',
          padding: 16,
          display: 'grid',
          placeContent: 'center',
          placeItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => history.replace('/')}
      >
        <Title style={{ color: '#fff', fontSize: 18, lineHeight: 1.75 }}>
          404
        </Title>
        <Text style={{ color: '#fff', fontSize: 14, lineHeight: 1.75 }}>
          Not Found
        </Text>
      </div>
    </div>
  );
};

export default Page404;
