import { useMemo } from 'react';

/**
 * @description 基于 clientRect 计算对其都不同角的固定定位
 *
 * @param {rect} BoundingClientRect
 * @param {offset} { x: Number, y: Number} 在计算基础上添加 offset
 */

const usePlacement = ({ rect = {}, offset = {} }) => {
  return useMemo(() => {
    const { x = 0, y = 0, width = 0, height = 0 } = rect;
    const { x: offsetX = 4, y: offsetY = 4 } = offset;
    return {
      topLeft: {
        left: x,
        bottom: -(y - offsetY),
      },
      topRight: {
        right: `calc(100vw - ${x + width}px)`,
        bottom: -(y - offsetY),
      },
      bottomLeft: {
        left: x,
        top: y + height + offsetY,
      },
      bottomRight: {
        right: `calc(100vw - ${x + width}px)`,
        top: y + height + offsetY,
      },

      leftTop: {
        right: `calc(100vw - ${x - offsetX}px)`,
        top: y,
      },
      leftBottom: {
        right: `calc(100vw - ${x - offsetX}px)`,
        bottom: `calc(100vh - ${y + height}px)`,
      },
      rightTop: {
        left: x + width + offsetX,
        top: y,
      },
      rightBottom: {
        left: x + width + offsetX,
        bottom: `calc(100vh - ${y + height}px)`,
      },
    };
  }, [rect, offset]);
};

export default usePlacement;
