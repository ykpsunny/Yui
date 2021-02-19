## Button

##### Default:

```tsx
import React from 'react';

import { Button } from 'dumi-lib';

export default () => (
  <>
    <Button onClick={e => console.log(e)} />
  </>
);
```

##### Primary:

```tsx
import React from 'react';

import { Button } from 'dumi-lib';

export default () => (
  <>
    <Button type="primary" className="test">
      Primary
    </Button>
  </>
);
```

##### Disabled:

```tsx
import React from 'react';

import { Button } from 'dumi-lib';

export default () => (
  <>
    <Button type="danger" disabled={true}>
      <span>Disabled</span>
    </Button>
  </>
);
```

##### Link:

```tsx
import React from 'react';

import { Button } from 'dumi-lib';

export default () => (
  <>
    <Button type="link" target="_blank" href="http://www.baidu.com">
      Link
    </Button>
    <Button type="link" disabled>
      Disibled Link
    </Button>
  </>
);
```

##### Dashed:

```tsx
import React from 'react';

import { Button } from 'dumi-lib';

export default () => (
  <>
    <Button loading={true} type="dashed" htmlType="button">
      Dashed
    </Button>
  </>
);
```

##### Loading:

```tsx
import React from 'react';

import { Button } from 'dumi-lib';

export default () => (
  <>
    <Button shape={true} type="danger" loading={true}>
      Loading
    </Button>
  </>
);
```

##### Button Group:

```tsx
import React from 'react';

import { Button } from 'dumi-lib';

const ButtonGroup = Button.ButtonGroup;

export default () => (
  <ButtonGroup>
    <Button type="danger" />
    <Button type="danger" />
    <Button type="danger" />
  </ButtonGroup>
);
```
