import React, { useEffect, useMemo, useState } from 'react';

import styled from 'styled-components';

/**
 * util
 */
import { isValidArray } from '@/utils/type';

/**
 * 组件
 */
import Swiper from './Swiper';
import Empty from './Empty';
import { debounce, throttle } from 'lodash';

/**
 *
 * @param {Number} rank 当前动画排序
 * @param {Number} i    默认数组内的排序
 * @param {Number} total 数据元素数量
 * @param {Number} target 动画排序相对默认排序的偏移量， 即目标元素的默认排序
 * @returns
 */
const deafultSequelize = (rank, i, total, target) => {
  const style =
    rank === 0
      ? { opacity: 1, transform: `translateX(0)` }
      : {
          opacity: 0,
          transform: `translateX(${(rank === 1 ? 1 : -1) * 100}%)`,
        };
  return style;
};

const Slides = ({
  options,
  value,
  onChange,
  sequelize = deafultSequelize,
  style = {},
  next = ['onClick'],
  prev = ['onSwipedRight'],
  showTicker,
}) => {
  const [target, setTarget] = useState(0);

  useEffect(() => {
    if (isValidArray(options))
      setTarget(
        Math.max(
          0,
          options.findIndex((opt) => opt.key === value),
        ),
      );
  }, [value, options]);

  const onUpdateOffset = throttle((updateBy) => {
    let latest = target + updateBy;

    if (latest < 0) latest = options.length - 1;
    if (latest === options.length) latest = 0;

    if (onChange) {
      onChange(options[latest].value);
    } else {
      setTarget(latest);
    }
  }, 200);

  const onUpdateKey = (key) => {
    const latest = options.findIndex((opt) => opt.key === key);

    if (onChange) {
      onChange(options[latest].value);
    } else {
      setTarget(latest);
    }
  };

  const genStyle = (i) => {
    const rank = i >= target ? i - target : options.length + i - target;
    return sequelize(rank, i, options.length, target);
  };

  const onNext = () => onUpdateOffset(1);
  const onPrev = () => onUpdateOffset(-1);

  // 绑定事件
  const events = useMemo(() => {
    let events = {};
    next.forEach((evt) => (events[evt] = onNext));
    prev.forEach((evt) => (events[evt] = onPrev));
    return events;
  }, [next, prev, target]);

  return isValidArray(options) ? (
    <div>
      <Swiper
        {...events}
        style={{
          display: 'grid',
          position: 'relative',
          overflow: 'hidden',
          ...style,
        }}
      >
        {options.map(({ key, content }, i) => {
          const active = key === options[target].key;
          return (
            <SlideItem key={key} style={genStyle(i)}>
              {React.cloneElement(content, {
                className: active ? 'ActiveSlideItem' : 'InactiveSlideItem',
              })}
            </SlideItem>
          );
        })}
      </Swiper>
      {showTicker && (
        <Ticker
          onSwitch={onUpdateKey}
          options={options}
          value={options[target].key}
        />
      )}
    </div>
  ) : (
    <Empty desc="无展示数据" />
  );
};

const SlideItem = styled.div(() => {
  return `
     transition: all .2s ease;

      &:first-child{
        position: relative;
      }
      
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `;
});

const Ticker = ({ onSwitch, options, value }) => {
  return (
    <div
      className="ticker"
      style={{
        display: 'grid',
        gap: 12,
        placeContent: 'center',
        padding: 12,
        gridAutoFlow: 'column',
      }}
    >
      {options.map(({ key }) => (
        <TickerItem
          key={key}
          active={key === value}
          onClick={() => onSwitch(key)}
        />
      ))}
    </div>
  );
};

const TickerItem = styled.div(({ active }) => {
  const bg = active
    ? 'linear-gradient(270deg, #FFDC38 0%, #FFBB38 100%)'
    : '#C4C4C4';
  const width = active ? 36 : 12;

  return `
    width: ${width}px;
    height: 12px;
    border-radius: 6px;
    background: ${bg};
    transition: all .12s ease-in-out;
    cursor: pointer;

  &:hover {
    background: linear-gradient(270deg, #FFDC3888 0%, #FFBB3888 100%);
  }
  `;
});

export default Slides;
