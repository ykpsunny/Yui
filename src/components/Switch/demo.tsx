import React, { Fragment } from 'react';

import { Switch } from '.';

function SwitchDemo() {
  return (
    <Fragment>
      <Switch id="1" />
      <Switch id="2" disabled />
    </Fragment>
  );
}

export default SwitchDemo;
