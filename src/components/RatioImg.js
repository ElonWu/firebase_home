import React, { useMemo, forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import { useInView } from 'react-intersection-observer';

const RatioImg = forwardRef(
  ({ style = {}, imgStyle = {}, ratio, src, ...rest }, ref) => {
    const { ref: imgRef, inView, entry } = useInView();
    return (
      <div
        className="RatioContainer"
        ref={ref}
        style={{ overflow: 'hidden', ...style }}
        {...rest}
      >
        <ImgContainer
          ratio={ratio}
          src={src}
          style={imgStyle}
          ref={imgRef}
          inView={inView}
        />
      </div>
    );
  },
);

const ImgContainer = styled.div(({ ratio, src, style = {}, inView }) => {
  const paddingTop = useMemo(() => {
    const ratios = {
      '21:9': (100 * 9) / 21,
      '16:9': (100 * 9) / 16,
      '4:3': (100 * 3) / 4,
      '1:1': 100,
    };

    return ratios[ratio] || 0;
  }, [ratio]);

  const [localInview, setLocalInView] = useState(false);

  // 首次进入后
  useEffect(() => {
    if (!localInview && inView) setLocalInView(true);
    // return () => setLocalInView(false);
  }, [inView]);

  const bg = useMemo(() => {
    return src && localInview
      ? `url(${src})`
      : `linear-gradient(180deg, #FEC94666 0%, #FF931566 100%)`;
  }, [src, localInview]);

  return `
        width: 100%;
        padding-top: ${paddingTop}%;
        border-radius: 8px;
        background-image: ${bg};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        transform-origin: center center;
    `;
});

export default RatioImg;
