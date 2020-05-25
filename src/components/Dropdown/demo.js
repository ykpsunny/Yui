import React from 'react';

import { Dropdown } from '.';

import { DownIcon } from 'PUBLIC/iconfont/icon';

import { Menu } from '../Menu';

const MenuItem = Menu.MenuItem;

function DropdownDemo() {
  const content = (
    <Menu>
      <MenuItem id="1">
        <a href="">text</a>
      </MenuItem>
      <MenuItem id="3">
        <a href="">text1</a>
      </MenuItem>
      <MenuItem id="2">
        <a href="">text1</a>
      </MenuItem>
    </Menu>
  );
  return (
    <div>
      <Dropdown content={content}>
        <a href="#" style={{ verticalAlign: 'middle' }}>
          click me <DownIcon />
        </a>
      </Dropdown>
    </div>
  );
}

export default DropdownDemo;
