import './iconfont';

import React from 'react';

export const CloseIcon = () => (
  <svg className="icon" aria-hidden="true">
    <use href="#icon-close"></use>
  </svg>
);

export const DownIcon = () => (
  <svg className="icon" aria-hidden="true">
    <use href="#icon-down"></use>
  </svg>
);

export const AvatarIcon = ({ size = 20 }) => (
  <svg className="icon" aria-hidden="true" style={{ fontSize: size }}>
    <use href="#icon-avatar"></use>
  </svg>
);
