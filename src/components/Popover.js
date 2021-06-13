import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * hook
 */
import usePlacement from '@/hooks/usePlacement';
import useRect from '@/hooks/useRect';

/**
 *组件
 */
import Portal from './Portal';

const Popover = ({ children, visible, popover, offset, placement }) => {
  const { dom, rect } = useRect({ children, visible });
  const placementStyle = usePlacement({ rect, offset });

  const style = useMemo(() => {
    return placementStyle[placement] || placementStyle.bottomLeft;
  }, [placement, placementStyle]);

  return (
    <>
      {dom}

      {/* 不带动画 */}
      {/* {visible && <Portal style={style}>{popover}</Portal>} */}

      {/* 自带动画 */}
      <AnimatePresence>
        {visible && (
          <Portal style={style}>
            <motion.div
              // 动画不修改起始位置就可以套娃
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -66 }}
            >
              {popover}
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Popover;
