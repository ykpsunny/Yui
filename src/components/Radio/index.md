## Radio

##### Single Radio:

```tsx
import React, { useState } from 'react';
import { Radio } from 'dumi-lib';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Radio
      onChenge={e => setChecked(e.target.checked)}
      checked={checked}
      defaultChecked={true}
    >
      email
    </Radio>
  );
};
```

##### Radio Group:

```tsx
import React, { useState } from 'react';
import { Radio } from 'dumi-lib';

const RadioGroup = Radio.RadioGroup;

export default () => {
  const [value, setValue] = useState('mail');
  return (
    <RadioGroup
      name="gender"
      value={value}
      onChenge={value => {
        setValue(value);
      }}
    >
      <Radio value="mail" id="mail">
        mail
      </Radio>
      <Radio value="femail" id="famail">
        femail
      </Radio>
    </RadioGroup>
  );
};
```
