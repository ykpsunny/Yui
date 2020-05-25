import React, { useState } from 'react';

import Radio from '.';

const RadioGroup = Radio.RadioGroup;

function RadioDemo() {
  const [value, setValue] = useState('mail');
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Radio
        onChenge={e => setChecked(e.target.checked)}
        checked={checked}
        defaultChecked={true}
      >
        email
      </Radio>
      <p>gender</p>
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
    </div>
  );
}

export default RadioDemo;
