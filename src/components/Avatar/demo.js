import React from 'react';

import { Avatar } from '.';

function AvatarDemo() {
  return (
    <div>
      <Avatar />
      <Avatar src="https://dss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_09b6296.png" />
      <Avatar name="Sy" />
      <Avatar size={50} shape="square" />
    </div>
  );
}

export default AvatarDemo;
