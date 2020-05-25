import React from 'react';

import { Button } from './';

const ButtonGroup = Button.ButtonGroup;

function ButtonDemo() {
  return (
    <React.Fragment>
      <div className="app-btn">
        <Button onClick={e => console.log(e)} />
        <Button type="primary" className="test">
          Primary
        </Button>
        <Button type="danger" disabled={true}>
          <span>Disabled</span>
        </Button>
        <Button
          type="link"
          disabled
          target="_blank"
          href="http://www.baidu.com"
        />
        <Button loading={true} type="dashed" htmlType="button" />
        <Button shape={true} type="danger" loading={true}>
          {''}
        </Button>
      </div>
      <div className="abc">
        <Button type="danger" block={true}>
          Block
        </Button>
        <ButtonGroup>
          <Button>link</Button>
          <Button>link</Button>
          <Button>link</Button>
        </ButtonGroup>
      </div>
    </React.Fragment>
  );
}

export default ButtonDemo;
