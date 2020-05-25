import React from 'react';

import classnames from 'classnames';

function TabItem({ tabKey, label, activeKey, setActiveKey, ...rest }) {
  const clas = classnames('yui-tab-item', {
    active: activeKey === tabKey,
  });

  return (
    <li
      className={clas}
      key={tabKey}
      onClick={() => setActiveKey(tabKey)}
      {...rest}
    >
      {label}
    </li>
  );
}

export default TabItem;
