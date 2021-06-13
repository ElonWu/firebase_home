import React, { useEffect, useMemo, useState } from 'react';

/**
 * 组件
 */
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Title from '@/components/Title';
import Text from '@/components/Text';

/**
 * 素材
 */
import List from '@/components/List';
import { useMediaQuery } from '@/hooks/MediaQuery';

const Skills = React.forwardRef(({ inView }, ref) => {
  const [firstInview, setFirstInview] = useState(false);

  useEffect(() => {
    if (inView && !firstInview) setFirstInview(true);
  }, [firstInview, inView]);

  // 请求接口
  // const { data: skillTypeList } = useApi(
  //   getskillTypeList,
  //   {},
  //   { shouldFetch: firstInview },
  // );

  const skillTypes = useMemo(
    () => [
      {
        id: 1,
        label: 'Figma',
        percent: 40,
      },
      {
        id: 2,
        label: 'Html CSS',
        percent: 80,
      },
      {
        id: 3,
        label: 'React',
        percent: 80,
      },
      {
        id: 4,
        label: 'G2',
        percent: 80,
      },
      {
        id: 5,
        label: 'Egg.js',
        percent: 60,
      },
      {
        id: 6,
        label: 'Docker',
        percent: 30,
      },
    ],
    [],
  );

  const [isMobile] = useMediaQuery();

  const checkSkills = (id) => {
    console.log(id);
  };

  return (
    <Section title="掌握技能" ref={ref}>
      <div
        style={
          isMobile
            ? {
                width: '100%',
                padding: 16,
              }
            : {
                maxWidth: isMobile ? '100%' : 1160,
                margin: '60px auto 0',
              }
        }
      >
        <List
          style={{
            display: 'grid',
            gap: isMobile ? 12 : '24px 20px',
            gridTemplateColumns: `repeat(${isMobile ? 2 : 3}, 1fr)`,
          }}
        >
          {skillTypes.map(({ id, label, percent }, i) => (
            <List.Item key={id} custom={{ i, col: isMobile ? 2 : 3 }}>
              <Card
                style={{
                  padding: 16,
                  display: 'grid',
                  placeContent: 'center',
                  gap: 2,
                  position: 'relative',
                  placeItems: 'center',
                }}
              >
                <Title
                  style={{
                    fontSize: isMobile ? 16 : 18,
                    // marginTop: 16,
                  }}
                >
                  {label}
                </Title>
                <Text style={{ fontSize: 12 }}>熟练度：{percent}%</Text>
                <Button
                  style={{ margin: '12px auto 0' }}
                  onClick={() => checkSkills(id)}
                >
                  查看详情
                </Button>
              </Card>
            </List.Item>
          ))}
        </List>
      </div>
    </Section>
  );
});

export default Skills;
