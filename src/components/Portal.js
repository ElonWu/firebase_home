import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, host: specifyHost, style = {} }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const host = specifyHost || document.body;

    const container = document.createElement('div');
    container.className = 'Portal';
    container.style = `position: absolute; top: 0; left: 0; width: 100vw;`;

    setContainer(container);
    host.appendChild(container);

    return () => {
      if (host.contains(container)) host.removeChild(container);
    };
  }, [specifyHost]);

  return (
    container &&
    createPortal(
      <div style={{ position: 'fixed', ...style }}>{children}</div>,
      container,
    )
  );
};

export default Portal;
