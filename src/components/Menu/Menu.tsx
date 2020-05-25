import React from 'react';

import propTypes from 'prop-types';

import './Menu.scss';

class Menu extends React.PureComponent {
  getChildContext() {
    let { openKeys, onOpenChange } = this.props;
    return {
      openKeys,
      onOpenChange,
    };
  }
  render() {
    let {
      width,
      children,
      style,
      openKeys,
      onOpenChange,
      ...rest
    } = this.props;
    return (
      <ul className="yui-menu-wrapper" {...rest} style={{ width, ...style }}>
        {children}
      </ul>
    );
  }
}

Menu.childContextTypes = {
  openKeys: propTypes.array,
  onOpenChange: propTypes.func,
};

Menu.defaultProps = {
  width: 150,
  openKeys: [],
  onOpenChange: () => {},
};

Menu.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]), // 菜单的宽度
  openKeys: propTypes.array, // 当前展开的 SubMenu 数组
  onOpenChange: propTypes.func, // SubMenu 展开/关闭的回调
};

export default Menu;
