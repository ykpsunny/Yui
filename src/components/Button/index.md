## Button

Demo:

```tsx
import React from 'react';

import { Button } from 'dumi-lib';

export default () => (
  <>
    <Button onClick={e => console.log(e)} />
    <Button type="primary" className="test">
      Primary
    </Button>
    <Button type="danger" disabled={true}>
      <span>Disabled</span>
    </Button>
    <Button type="link" disabled target="_blank" href="http://www.baidu.com">
      Link
    </Button>
    <Button loading={true} type="dashed" htmlType="button" />
    <Button shape={true} type="danger" loading={true} />
  </>
);
```
