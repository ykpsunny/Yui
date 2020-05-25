import React from 'react';

import Popover from '.';

function PopoverDemo() {
  return (
    <div>
      <Popover
        content={
          <div>
            content content content content content content content content
            content content content content content content content
          </div>
        }
      >
        click me
      </Popover>
    </div>
  );
}

export default PopoverDemo;
