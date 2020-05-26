import React, { CSSProperties } from 'react';

import propTypes from 'prop-types';

import './SubMenu.scss';

export interface IProps {
  title?: React.ReactNode;
  onTitleClick?: () => void;
  childrenS?: React.ReactNode;
  key: string | number;
  style: CSSProperties;
  padding: number;
  childClassName?: string;
}

const SubMenu: React.FC<IProps> = (props, context) => {
  let { openKeys, onOpenChange } = context;
  let { padding } = props;
  function renderContent(children: React.ReactNode, paddingLeft: number) {
    return React.Children.map(children, (child: any) => {
      let { style = {} } = child.props,
        { type } = child;
      if (type.name !== 'MenuItem' || type.name !== 'SubMenu')
        if (type.name === 'MenuItem') {
          return React.cloneElement(child, {
            style: {
              paddingLeft,
              ...style,
            },
          });
        } else {
          return render(child.props, paddingLeft);
        }
      return child;
    });
  }

  function render(props: any, paddingLeft = padding) {
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
};

SubMenu.contextTypes = {
  openKeys: propTypes.array,
  onOpenChange: propTypes.func,
};

SubMenu.defaultProps = {
  title: 'Title',
  onTitleClick: () => {},
  padding: 16,
};

SubMenu.propTypes = {
  title: propTypes.node, // 展示标题节点
  onTitleClick: propTypes.func, // 点击 title 事件处理函数
  childClassName: propTypes.string, // 子元素类名
};

export default SubMenu;
