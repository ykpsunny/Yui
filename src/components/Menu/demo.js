import React from 'react';

import { Menu } from '.';

const MenuItem = Menu.MenuItem;

const SubMenu = Menu.SubMenu;

function MenuDemo() {
  return (
    <div>
      <Menu style={{ border: '1px solid #ccc' }}>
        <MenuItem key="0">春天</MenuItem>
        <MenuItem key="1">夏天</MenuItem>
        <MenuItem key="2">秋天</MenuItem>
        <MenuItem key="3">冬天</MenuItem>
      </Menu>
      <Menu>
        <SubMenu title={<a href="#">春天</a>}>
          <MenuItem key="0">一月</MenuItem>
          <MenuItem key="1">二月</MenuItem>
          <MenuItem key="2">三月</MenuItem>
        </SubMenu>
        <SubMenu title={<a href="#">夏天</a>}>
          <MenuItem key="3">四月</MenuItem>
          <MenuItem key="0">五月</MenuItem>
          <MenuItem key="1">六月</MenuItem>
        </SubMenu>
        <SubMenu title={<a href="#">秋天</a>}>
          <MenuItem key="2">七月</MenuItem>
          <MenuItem key="3">八月</MenuItem>
          <MenuItem key="0">九月</MenuItem>
        </SubMenu>
        <SubMenu title={<a href="#">冬天</a>}>
          <SubMenu title={<a href="#">十月</a>}>
            <MenuItem key="1">国庆节</MenuItem>
            <MenuItem key="2">重阳节</MenuItem>
            <MenuItem key="3">万圣节</MenuItem>
          </SubMenu>
          <MenuItem key="0">十一月</MenuItem>
          <MenuItem key="1">十二月</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default MenuDemo;
