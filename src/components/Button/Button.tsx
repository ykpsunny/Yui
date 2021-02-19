import React from 'react';

import './Button.scss';

import propTypes from 'prop-types';

import classnames from 'classnames';

import { BtnLoading } from '../../assets/svgs';

export interface IProps {
  type?: 'primary' | 'default' | 'danger' | 'link' | 'dashed';
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  htmlType?: 'submit' | 'button' | 'reset';
  shape?: boolean;
  target?: string;
  onClick?: React.MouseEventHandler;
  loading?: boolean;
  block?: boolean;
}

const Button: React.FC<IProps> = ({
  type,
  children,
  className,
  htmlType,
  shape,
  block,
  loading,
  onClick,
  ...rest
}) => {
  const clas = ['yui-btn', className];
  const classNames = classnames(clas, {
    [`yui-btn-${type}`]: type,
    'yui-btn-shape': shape,
    'yui-btn-block': block,
    [`yui-btn-loading`]: loading,
  });
  function handleClick(e: any) {
    if (loading) {
      return;
    }
    onClick && onClick(e);
  }
  if (type === 'link') {
    return (
      <a {...rest} className={classNames} onClick={handleClick}>
        {children}
      </a>
    );
  }
  return (
    <button
      {...rest}
      className={classNames}
      type={htmlType}
      onClick={handleClick}
    >
      {loading && (
        <i className="btn-loading">
          <BtnLoading />
        </i>
      )}
      <div className="inner-text">{children}</div>
    </button>
  );
};

Button.defaultProps = {
  type: 'default',
  disabled: false,
  children: 'Default',
  htmlType: 'button',
  loading: false,
  shape: false,
  target: 'new',
};

Button.propTypes = {
  type: propTypes.oneOf(['primary', 'default', 'danger', 'link', 'dashed']), // 设置按钮类型，可选值为 primary dashed danger link, 默认为 default
  disabled: propTypes.bool, // 按钮是否禁用
  children: propTypes.oneOfType([propTypes.element, propTypes.string]), // 内容
  className: propTypes.string,
  href: propTypes.string, // 点击跳转的地址(a 元素)
  htmlType: propTypes.oneOf(['submit', 'button', 'reset']), // 设置 button 原生的 type 值
  shape: propTypes.bool, // 按钮是否圆形
  target: propTypes.string, // 相当于 a 链接的 target 属性，href 存在时生效
  onClick: propTypes.func, // 点击回调
  loading: propTypes.bool, // 设置按钮载入状态
  block: propTypes.bool, // 是否占满容器
};

export default Button;
