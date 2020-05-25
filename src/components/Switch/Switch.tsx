import React, { useState } from 'react';

import PropTypes from 'prop-types';

import classnames from 'classnames';

import './Switch.scss';

const Switch = ({
  defaultChecked,
  disabled,
  size,
  id,
  className,
  children,
  onChange,
  ...rest
}) => {
  const [checked, setChecked] = useState(defaultChecked),
    clas = classnames('yui-input-container', `yui-input-container-${size}`, {
      checked,
      disabled,
    });
  function changeHandle(e) {
    setChecked(!checked);
    onChange && onChange();
  }
  return (
    <div className={classnames('yui-switch-wrapper', className)}>
      <div className={clas}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          className={classnames('yui-input', {
            disabled,
          })}
          disabled={disabled}
          onChange={changeHandle}
          {...rest}
        />
        <div
          className={classnames('yui-switcher', `yui-switcher-${size}`, {
            checked,
          })}
        />
      </div>
      {children && (
        <label htmlFor={id} className="yui-label">
          {children}
        </label>
      )}
    </div>
  );
};

Switch.defaultProps = {
  defaultChecked: true,
  disabled: false,
  size: 'middle',
  onChange: () => {},
};

Switch.propTypes = {
  defaultChecked: PropTypes.bool, // 默认是否选中
  disabled: PropTypes.bool, // 是否禁用
  size: PropTypes.oneOf(['small', 'middle', 'large']), // switch 大小
  id: PropTypes.string, // 关联 label id
  className: PropTypes.string, // 容器类名
  children: PropTypes.node,
  onChange: PropTypes.func, // switch 改变时的回调函数
};

export default Switch;
