## Avatar

##### 默认头像:

```tsx
import React from 'react';
import { Avatar } from 'dumi-lib';

export default () => (
  <>
    <Avatar />
  </>
);
```

##### 图片头像:

```tsx
import React from 'react';
import { Avatar } from 'dumi-lib';

export default () => (
  <>
    <Avatar src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3912589619,958310671&fm=11&gp=0.jpg" />
  </>
);
```

##### 名字头像:

```tsx
import React from 'react';
import { Avatar } from 'dumi-lib';

export default () => (
  <>
    <Avatar name="Sunny Yang" />
  </>
);
```

##### 正方形头像:

```tsx
import React from 'react';
import { Avatar } from 'dumi-lib';

export default () => (
  <>
    <Avatar size={50} shape="square" />
  </>
);
```
