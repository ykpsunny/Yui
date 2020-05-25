import React, { useState, useEffect } from 'react';

import './Tabs.scss';

import propTypes from 'prop-types';

import classnames from 'classnames';

import TabItem from './TabItem';

function Tabs({ children, tabPosition, tabList, defaultActiveKey, onChange }) {
  const clas = classnames('yui-tabs-wrapper', tabPosition),
    [activeKey, setActiveKey] = useState(defaultActiveKey);

  function renderTabList(tabList) {
    return tabList.map(item => (
      <TabItem {...item} activeKey={activeKey} setActiveKey={setActiveKey} />
    ));
  }

  useEffect(() => {
    onChange && onChange(activeKey);
  }, [activeKey]);

  return (
    <div className={clas}>
      <ul className="yui-tab-title">{renderTabList(tabList)}</ul>
      <div className="yui-tab-content">{children}</div>
    </div>
  );
}

Tabs.defaultProps = {
  tabPosition: 'horizontal',
};

Tabs.propTypes = {
  children: propTypes.node, // 渲染的 pane
  tabPosition: propTypes.oneOf(['horizontal', 'vertical']), // 显示位置
  defaultActiveKey: propTypes.oneOfType([propTypes.string, propTypes.number]), // 默认选中的 pane
  onChange: propTypes.func, // 切换面板时的回调函数
  tabList: propTypes.arrayOf(
    propTypes.shape({
      tabKey: propTypes.oneOfType([propTypes.string, propTypes.number])
        .isRequired, // tab 切换唯一标识
      label: propTypes.node.isRequired, // tab item
    }),
  ), // tab 列表
};

export default Tabs;
