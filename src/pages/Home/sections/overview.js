import React, { useMemo } from 'react';

/**
 * 素材
 */
import poster from '@/assets/poster.jpg';
import RatioImg from '@/components/RatioImg';

const Overview = React.forwardRef((props, ref) => {
  return (
    <div style={{ width: '100%' }} ref={ref}>
      <RatioImg
        src={poster}
        alt="poster"
        ratio="16:9"
        style={{
          width: '100%',
          display: 'block',
          margin: 0,
        }}
        imgStyle={{ borderRadius: '0 0 8px 8px' }}
      />
    </div>
  );
});

export default Overview;
