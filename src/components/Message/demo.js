import React from 'react';

import { Button } from '../Button';

import { Message } from '.';

function MessageDemo() {
  return (
    <div>
      <Button onClick={e => Message.open('hello world')}>click me</Button>
    </div>
  );
}

export default MessageDemo;
