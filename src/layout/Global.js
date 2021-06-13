import React, { useState, useEffect } from 'react';

export default ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        margin: 'auto',
      }}
    >
      {children}
    </div>
  );
};
