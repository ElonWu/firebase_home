import React, { useMemo } from 'react';

// header
import Header from '@/components/Header';
// 主题内容
import Contact from './sections/contact';
import Skills from './sections/skills';
import Overview from './sections/overview';
import Traits from './sections/traits';

/**
 * utils
 */
import { useInView } from 'react-intersection-observer';
import { MediaQueryProvider, useMediaQuery } from '@/hooks/MediaQuery';

const Home = () => {
  const { inView: homeInview, entry: homeEntry, ref: homeRef } = useInView();
  const {
    inView: skillsInview,
    entry: skillsEntry,
    ref: skillsRef,
  } = useInView();
  const {
    inView: traitsInview,
    entry: traitsEntry,
    ref: traitsRef,
  } = useInView();
  const {
    inView: joinusInview,
    entry: joinusEntry,
    ref: joinusRef,
  } = useInView();

  const sections = useMemo(
    () => [
      // {
      //   key: 'home',
      //   title: '我',
      //   ref: homeRef,
      //   entry: homeEntry,
      //   inView: homeInview,
      //   component: Overview,
      // },
      {
        key: 'skills',
        title: '掌握技能',
        ref: skillsRef,
        entry: skillsEntry,
        inView: skillsInview,
        component: Skills,
      },
      {
        key: 'traits',
        title: '个人特点',
        ref: traitsRef,
        entry: traitsEntry,
        inView: traitsInview,
        component: Traits,
      },
      {
        key: 'hireme',
        title: '联系方式',
        ref: joinusRef,
        entry: joinusEntry,
        inView: joinusInview,
        component: Contact,
      },
    ],
    [homeInview, skillsInview, traitsInview, joinusInview],
  );

  const [isMobile] = useMediaQuery();

  return (
    <div
      className="Home"
      style={{
        position: 'relative',
        paddingTop: 48,
        width: '100%',
        minWidth: isMobile ? '100%' : 1192,
        background: '#F5F5F5',
      }}
    >
      <Header style={{ height: 48 }} sections={sections} />

      <div style="content" style={{ width: '100%', display: 'grid', gap: 0 }}>
        {sections.map(({ component: Sec, key, entry, inView, ref }) => (
          <Sec ref={ref} entry={entry} key={key} inView={inView} />
        ))}
      </div>
    </div>
  );
};

const Layout = () => (
  <MediaQueryProvider>
    <Home />
  </MediaQueryProvider>
);
export default Layout;
