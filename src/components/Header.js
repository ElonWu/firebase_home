import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useMediaQuery } from '@/hooks/MediaQuery';

/**
 * 组件
 */
import Title from '@/components/Title';
import Popover from './Popover';
import Card from './Card';
import Button from './Button';
import Text from './Text';

/**
 * 素材
 */
import logo from '@/assets/logo.png';

import { isDeveloping, isTesting, isReleasing } from '@/api/base';

const Header = ({ style = {}, sections = [] }) => {
  const [activeNav, setActiveNav] = useState(sections[0]);
  const showEntry = (key) => {
    const activeSection = sections.find((section) => section.key === key);
    const rect = activeSection?.entry?.target.getBoundingClientRect();

    const scrollTop = document.body.scrollTop;

    setActiveNav(activeSection);

    window.scrollTo({
      top: rect.top + scrollTop - 48,
      behavior: 'smooth',
    });
  };

  const [isMobile] = useMediaQuery();

  return (
    <header
      className="Header"
      style={{
        background: '#140C2B',
        minWidth: isMobile ? '100%' : 1160,
        position: 'fixed',
        zIndex: 100,
        top: 0,
        left: 0,
        width: '100%',
        ...style,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          maxWidth: isMobile ? '100%' : 1160,
          margin: 'auto',
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          placeItems: 'center',
          placeContent: 'center space-between',
          padding: isMobile ? '0 16px' : 0,
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: 8,
            placeSelf: 'center flex-start',
            placeItems: 'center flex-start',
            gridAutoFlow: 'column',
          }}
          onClick={() => showEntry(sections[0]?.key)}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              display: 'block',
              height: 24,
              cursor: 'pointer',
            }}
          />

          <Text style={{ color: '#fff' }}>
            {isDeveloping ? '开发中' : isTesting ? '测试版' : 'ELonWu'}
          </Text>
        </div>

        {isMobile ? (
          <MobileNavbar
            sections={sections}
            activeNav={activeNav}
            showEntry={showEntry}
          />
        ) : (
          <PCNavbar
            sections={sections}
            activeNav={activeNav}
            showEntry={showEntry}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

const Nav = styled(Title)`
  position: relative;
  width: 120px;
  height: 48px;
  line-height: 48px;

  text-align: center;
  cursor: pointer;

  &.active::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 10%;
    width: 80%;
    border-radius: 2px;
    height: 4px;
    background: #ffb62b;
  }
`;

const PCNavbar = ({ sections, activeNav, showEntry }) => (
  <div
    style={{
      display: 'grid',
      gap: 12,
      gridTemplateColumns: `repeat(${sections.length}, 1fr)`,
      placeContent: 'center',
      paddingRight: 120,
    }}
  >
    {sections.map(({ key, title }) => {
      const active = activeNav?.key === key;
      return (
        <Nav
          key={key}
          className={active ? 'active' : ''}
          style={{
            color: active ? '#ffb62b' : '#fff',
          }}
          onClick={() => showEntry(key)}
        >
          {title}
        </Nav>
      );
    })}
  </div>
);

const MobileNavbar = ({ sections, activeNav, showEntry }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onHide = () => setVisible(false);

    document.addEventListener('scroll', onHide);

    return () => document.removeEventListener('scroll', onHide);
  });

  return (
    <Popover
      visible={visible}
      placement="bottomRight"
      offset={{ y: 16 }}
      popover={
        <Card
          style={{
            display: 'grid',
            gap: 12,
            placeContent: 'stretch',
            background: '#150d2b',
          }}
        >
          {sections.map(({ key, title }) => {
            const active = activeNav?.key === key;
            return (
              <Nav
                key={key}
                className={active ? 'active' : ''}
                style={{
                  color: active ? '#ffb62b' : '#fff',
                }}
                onClick={() => {
                  setVisible(false);
                  showEntry(key);
                }}
              >
                {title}
              </Nav>
            );
          })}
        </Card>
      }
    >
      <Button
        onClick={() => setVisible(!visible)}
        style={{ placeSelf: 'center flex-end' }}
      >
        {visible ? '收起' : '展开'}
      </Button>
    </Popover>
  );
};
