import React from 'react';

import classnames from 'classnames';

export interface IProps {
  tabKey: string;
  label: string;
  activeKey: string;
  setActiveKey: (tabKey: string) => void;
}

const TabItem: React.FC<IProps> = ({
  tabKey,
  label,
  activeKey,
  setActiveKey,
  ...rest
}) => {
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
};

export default TabItem;
