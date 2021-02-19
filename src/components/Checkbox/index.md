## Checkbox

##### Normal:

```tsx
import React, { useState } from 'react';
import { Checkbox } from 'dumi-lib';

export default () => {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox id="name" onChange={e => setChecked(e.target.value)}>
      Normal
    </Checkbox>
  );
};
```

##### Disibled:

```tsx
import React from 'react';
import { Checkbox } from 'dumi-lib';

export default () => (
  <Checkbox id="age" disibled={true}>
    Disibled
  </Checkbox>
);
```

##### Checkbox Group:

```tsx
import React, { useState } from 'react';
import { Checkbox } from 'dumi-lib';

const CheckboxGroup = Checkbox.CheckboxGroup;

export default () => {
  let [value, setValue] = useState(['小明', 19]);
  return (
    <CheckboxGroup
      name="a"
      onChenge={checkedValue => {
        setValue(checkedValue);
      }}
      value={value}
    >
      <Checkbox value="小明">name</Checkbox>
      <Checkbox value={19}>age</Checkbox>
      <Checkbox value="mail">gender</Checkbox>
    </CheckboxGroup>
  );
};
```

##### Disibled Checkbox Group:

```tsx
import React from 'react';
import { Checkbox } from 'dumi-lib';

const CheckboxGroup = Checkbox.CheckboxGroup;

export default () => {
  return (
    <CheckboxGroup name="b" disibled={true}>
      <Checkbox value="小明">name</Checkbox>
      <Checkbox value="18">age</Checkbox>
    </CheckboxGroup>
  );
};
```
