## Dropdown

##### Click:

```tsx
import React from 'react';

import { DownIcon } from '../../assets/iconfont/icon';

import { Menu, Dropdown } from 'dumi-lib';

const MenuItem = Menu.MenuItem;

export default () => {
  const content = (
    <Menu>
      <MenuItem id="1">
        <a href="">text</a>
      </MenuItem>
      <MenuItem id="3">
        <a href="">text1</a>
      </MenuItem>
      <MenuItem id="2">
        <a href="">text2</a>
      </MenuItem>
    </Menu>
  );
  return (
    <Dropdown content={content}>
      <a href="#" style={{ verticalAlign: 'middle' }}>
        click me <DownIcon />
      </a>
    </Dropdown>
  );
};
```
