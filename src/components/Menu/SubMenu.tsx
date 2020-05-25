import React from 'react';

import propTypes from 'prop-types';

import './SubMenu.scss';

let padding = 16;

function SubMenu(props, context) {
  let { openKeys, onOpenChange } = context;
  function renderContent(children, paddingLeft) {
    return React.Children.map(children, child => {
      let { style = {} } = child.props,
        { type } = child;
      if (type.name === 'MenuItem') {
        return React.cloneElement(child, {
          style: {
            paddingLeft,
            ...style,
          },
        });
      } else if (type.name === 'SubMenu') {
        return render(child.props, paddingLeft);
      }
      return child;
    });
  }

  function render(props, paddingLeft = padding) {
    let { title, children, onTitleClick, key, style, ...rest } = props;
    return (
      <li className="yui-sub-menu-wrapper" {...rest}>
        <div
          className="yui-sub-menu-title"
          onClick={e => {
            onTitleClick && onTitleClick(key, e);
          }}
          style={{ paddingLeft, ...style }}
        >
          {title}
        </div>
        <ul className="yui-sub-menu-content">
          {renderContent(children, paddingLeft + padding)}
        </ul>
      </li>
    );
  }
  return render(props);
}

SubMenu.contextTypes = {
  openKeys: propTypes.array,
  onOpenChange: propTypes.func,
};

SubMenu.defaultProps = {
  title: 'Title',
  onTitleClick: () => {},
};

SubMenu.propTypes = {
  title: propTypes.node, // 展示标题节点
  onTitleClick: propTypes.func, // 点击 title 事件处理函数
  childClassName: propTypes.string, // 子元素类名
};

export default SubMenu;
