import React, { useState } from 'react';

import Tabs from '.';

function TabsDemo() {
  const [state, setState] = useState('0');
  const tabList = [
    {
      tabKey: '0',
      label: '春天',
    },
    {
      tabKey: '1',
      label: '夏天',
    },
    {
      tabKey: '2',
      label: '秋天',
    },
    {
      tabKey: '3',
      label: '冬天',
    },
  ];

  function renderContent(activeKey) {
    switch (activeKey) {
      case '0':
        return '春天';
      case '1':
        return '夏天';
      case '2':
        return '秋天';
      case '3':
        return '冬天';
      default:
        return;
    }
  }

  function changeHandle(activeKey) {
    setState(activeKey);
  }

  return (
    <div>
      <Tabs tabList={tabList} defaultActiveKey={state} onChange={changeHandle}>
        {renderContent(state)}
      </Tabs>
    </div>
  );
}

export default TabsDemo;
