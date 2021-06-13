const { useRef, useEffect, useCallback } = require('react');

const useBoundary = ({ onClickInside, onClickOutside }) => {
  const ref = useRef(null);

  const detectClick = useCallback(
    (e) => {
      // 判断点击的 dom 是否在目标 dom 内部
      if (ref && ref.current) {
        if (ref.current.contains(e.target)) {
          onClickInside && onClickInside();
        } else {
          onClickOutside && onClickOutside();
        }
      }
    },
    [onClickInside, onClickOutside],
  );

  // 判断点击是否在 dom 范围内
  useEffect(() => {
    document.addEventListener('mousedown', detectClick);
    return () => document.removeEventListener('mousedown', detectClick);
  }, [detectClick]);

  // 滚动到可视范围内
  const scrollIntoView = (options = { block: 'center', inline: 'center' }) =>
    ref.current.scrollIntoView(options);

  return { ref, scrollIntoView };
};

export default useBoundary;
