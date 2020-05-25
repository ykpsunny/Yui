import React from 'react';

import { Drawer } from '.';

function DrawerDemo() {
  return (
    <div>
      <Drawer getContainer={document.getElementById('root')}>Content</Drawer>
    </div>
  );
}

export default DrawerDemo;
