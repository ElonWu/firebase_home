import React from 'react';
import Section from '@/components/Section';
import Scan from '@/components/Scan';
import Title from '@/components/Title';
import Text from '@/components/Text';
import { useMediaQuery } from '@/hooks/MediaQuery';

const Contact = React.forwardRef((props, ref) => {
  const [isMobile] = useMediaQuery();
  return isMobile ? <MobileContact ref={ref} /> : <PCContact ref={ref} />;
});

export default Contact;

const MobileContact = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{
      width: '100%',
      position: 'relative',
      paddingTop: 92,
    }}
  >
    <div style={{ position: 'absolute', left: 16, top: 16 }}>
      <Scan width={160} />
    </div>

    <div
      style={{
        backgroundColor: '#FFBE43',
        display: 'grid',
        placeContent: 'center flex-start',
        gap: 8,
        height: 120,
        padding: '16px 16px 16px 200px',
        borderTopLeftRadius: 60,
      }}
    >
      <Text style={{ fontSize: 12 }}>
        邮箱：
        <a
          href="wrzmonkey2012@hotmail.com"
          style={{
            color: '#140c2b',
            padding: '4px 0',
            textDecoration: 'none',
          }}
        >
          wrzmonkey2012@hotmail.com
        </a>
      </Text>
    </div>
  </div>
));

const PCContact = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1160px 1fr',
      placeItems: 'flex-end',
    }}
  >
    <div></div>
    <div
      style={{
        width: '100%',
        height: 366,
        margin: '12px auto 0',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
        <Scan />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 66,
          bottom: 0,
          right: 0,
          left: '10%',
          backgroundColor: '#FFBE43',
          height: 300,
          borderTopLeftRadius: 300,
          display: 'grid',
          placeContent: 'center',
          gap: 12,
        }}
      >
        <Text style={{ fontSize: 16 }}>
          邮箱：
          <a
            href="wrzmonkey2012@hotmail.com"
            style={{ color: '#140c2b', padding: 4, textDecoration: 'none' }}
          >
            wrzmonkey2012@hotmail.com
          </a>
        </Text>
      </div>
    </div>

    <div
      style={{
        height: 300,
        width: '100%',
        backgroundColor: '#FFBE43',
      }}
    />
  </div>
));
