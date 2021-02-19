## Radio

Demo:

```tsx
import React, { useState } from 'react';
import { Radio } from 'dumi-lib';

const RadioGroup = Radio.RadioGroup;

export default () => {
  const [value, setValue] = useState('mail');
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Radio
        onChenge={e => setChecked(e.target.checked)}
        checked={checked}
        defaultChecked={true}
      >
        email
      </Radio>
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
    </>
  );
};
```
