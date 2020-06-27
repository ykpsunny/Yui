import React, { useState } from 'react';

import PropTypes from 'prop-types';

import classnames from 'classnames';

import './Switch.scss';

export interface IProps {
  defaultChecked?: boolean; // 默认是否选中
  disabled?: boolean; // 是否禁用
  size: 'small' | 'middle' | 'large'; // switch 大小
  id: string; // 关联 label id
  className?: string; // 容器类名
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void; // switch 改变时的回调函数
}

const Switch: React.FC<IProps> = ({
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
  function changeHandle(e: any) {
    setChecked(!checked);
    onChange && onChange(!checked);
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

// Switch.propTypes = {
//   defaultChecked: PropTypes.bool, // 默认是否选中
//   disabled: PropTypes.bool, // 是否禁用
//   size: PropTypes.oneOf(['small', 'middle', 'large']).isRequired, // switch 大小
//   id: PropTypes.string.isRequired, // 关联 label id
//   className: PropTypes.string, // 容器类名
//   children: PropTypes.node,
//   onChange: PropTypes.func.isRequired, // switch 改变时的回调函数
// };

export default Switch;
