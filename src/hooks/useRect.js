import React, { useState, useCallback, useMemo } from 'react';

const useRect = ({ children, visible = true }) => {
  const [rect, setRect] = useState({});

  const updateTarget = useCallback(
    (target) => {
      if (!target || !visible) return;
      setRect(target.getBoundingClientRect());
    },
    [visible],
  );

  const dom = useMemo(
    () => React.cloneElement(children, { ref: updateTarget }),
    [children, updateTarget],
  );

  return { rect, dom };
};

export default useRect;
