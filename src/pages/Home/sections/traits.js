import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

/**
 * 素材
 */

import efficiency from '@/assets/trait_efficiency.svg';
import mind from '@/assets/trait_mind.svg';
import teamwork from '@/assets/trait_teamwork.svg';
import selfdriven from '@/assets/trait_selfdriven.svg';

import env_1 from '@/assets/env_1.jpg';
import env_2 from '@/assets/env_2.jpg';
import env_3 from '@/assets/env_3.jpg';
import env_4 from '@/assets/env_4.jpg';

/**
 * 组件
 */
import Section from '@/components/Section';

import Title from '@/components/Title';
import Text from '@/components/Text';
import RatioImg from '@/components/RatioImg';
import Card from '@/components/Card';
import Slides from '@/components/Slides';
import List from '@/components/List';
import { useMediaQuery } from '@/hooks/MediaQuery';

const Traits = React.forwardRef(({ inView }, ref) => {
  const [firstInview, setFirstInview] = useState(false);

  useEffect(() => {
    if (inView && !firstInview) setFirstInview(true);
  }, [firstInview, inView]);

  const traits = useMemo(
    () =>
      firstInview
        ? [
            {
              title: '高效学习',
              desc: '高效的学习能力，源码阅读能力',
              icon: efficiency,
            },
            {
              title: '思维活跃',
              desc: '活跃的产品思维，大局观',
              icon: mind,
            },
            {
              title: '团队合作',
              desc: '沟通流畅',
              icon: teamwork,
            },
            {
              title: '自我驱动',
              desc: '兴趣驱动完成自我升级',
              icon: selfdriven,
            },
          ]
        : [],
    [firstInview],
  );

  const options = useMemo(() => {
    const options = [
      { key: 'env_1', img: env_1, title: '项目一' },
      { key: 'env_2', img: env_2, title: '项目二' },
      { key: 'env_3', img: env_3, title: '项目三' },
      { key: 'env_4', img: env_4, title: '项目四' },
    ];
    return options.map(({ key, img, title }) => ({
      key,
      content: (
        <SlideItem style={{ display: 'grid', gap: 8, placeContent: 'stretch' }}>
          <img
            src={img}
            alt={key}
            style={{ width: '100%', display: 'block', borderRadius: 16 }}
          />
          <Title style={{ textAlign: 'center', color: '#64698F' }}>
            {title}
          </Title>
        </SlideItem>
      ),
    }));
  }, []);

  const slideSequelize = (rank, i, length, target) => {
    let scale = 0,
      opacity = 0,
      rotate = 0,
      x = -100;

    switch (rank) {
      case 0:
        scale = 1;
        opacity = 1;
        x = 0;
        break;

      case 1:
        scale = 0.6;
        opacity = 0.6;
        x = 78;
        rotate = 30;
        break;

      case length - 1:
        scale = 0.6;
        opacity = 0.6;
        x = -78;
        rotate = -30;
        break;
    }

    return {
      opacity,
      transformOrigin: 'center center',
      transform: `translateX(${x}%) scale(${scale}) rotateY(${rotate}deg)`,
    };
  };

  const [isMobile] = useMediaQuery();

  return (
    <Section theme="light" title="个人特点" ref={ref}>
      <List
        style={
          isMobile
            ? {
                width: '100%',
                padding: 16,

                display: 'grid',
                gap: 16,
                gridTemplateColumns: `repeat(1, 1fr)`,
                placeItems: 'stretch',
              }
            : {
                maxWidth: isMobile ? '100%' : 1160,
                margin: '60px auto 0',

                display: 'grid',
                gap: 16,
                gridTemplateColumns: `repeat(2, 1fr)`,
                placeItems: 'stretch',
              }
        }
      >
        {traits.map(({ title, desc, icon }, i) => (
          <List.Item key={title} custom={{ i, col: isMobile ? 1 : 2 }}>
            <Card
              style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                placeContent: isMobile ? 'center' : 'center flex-start',
                placeItems: isMobile ? 'flex-start' : 'center',
                gridTemplateColumns: 'auto 1fr',
                gap: 4,
              }}
            >
              <div
                style={{
                  width: isMobile ? 42 : 100,
                  height: isMobile ? 42 : 100,
                  padding: isMobile ? 8 : 16,
                  borderRadius: 12,
                  border: '1px solid #ededed',
                }}
              >
                <RatioImg src={icon} ratio="1:1" />
              </div>

              <div
                style={{
                  display: 'grid',
                  width: '100%',
                  padding: isMobile ? '0 16px' : '16px 0 16px 16px',
                  placeContent: 'center flex-start',
                  placeItems: 'center flex-start',
                }}
              >
                <Title
                  ellipsis
                  type="h2"
                  style={{ height: 42, lineHeight: '42px' }}
                >
                  {title}
                </Title>
                <Text ellipsis={3}>{desc}</Text>
              </div>
            </Card>
          </List.Item>
        ))}
      </List>

      <div
        style={{
          width: '100%',
          maxWidth: isMobile ? '100%' : 1160,
          padding: isMobile ? 16 : 0,
          margin: isMobile ? 'auto' : '24px auto',
          overflow: 'hidden',
        }}
      >
        <Slides
          style={{
            width: isMobile ? '100%' : 660,
            margin: '0 auto',
            overflow: 'visible',
          }}
          options={options}
          sequelize={slideSequelize}
          next={isMobile ? ['onSwipedLeft'] : []}
          prev={isMobile ? ['onSwipedRight'] : []}
          showTicker
        />
      </div>
    </Section>
  );
});

export default Traits;

const SlideItem = styled.div`
  &.InactiveSlideItem h3 {
    opacity: 0;
  }
`;
