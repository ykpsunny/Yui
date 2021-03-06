import React from 'react';

import './Radio.scss';

import propTypes from 'prop-types';

import classnames from 'classnames';

export interface IProps {
  children: React.ReactNode; // 显示内容
  id: string; // 用于关联文本,
  className?: string; // 容器类名
  disibled?: boolean; // 是否禁用
  onChenge: (e: any) => void; // 状态改变时的回调
  checked?: boolean; // 是否选中
  defaultChecked?: boolean; // 默认是否选中
}

const Radio: React.FC<IProps> = ({
  children,
  id,
  className,
  disibled,
  onChenge,
  checked,
  defaultChecked,
  ...rest
}) => {
  const clas = classnames('yui-radio-wrapper', className);
  function checkedChange(e: any) {
    if (disibled) return;
    onChenge(e);
  }
  return (
    <div className={clas}>
      <label
        htmlFor={id}
        className={classnames('yui-label', {
          'yui-label-disibled': disibled,
          'yui-label-checked': defaultChecked || checked,
        })}
      >
        <input
          type="radio"
          id={id}
          className="yui-radio-input"
          {...rest}
          onClick={checkedChange}
        />
        <div className="yui-label-text">{children}</div>
      </label>
    </div>
  );
};

Radio.defaultProps = {
  disibled: false,
  checked: false,
  defaultChecked: false,
  onChenge: () => {},
};

// Radio.propTypes = {
//   children: propTypes.node.isRequired, // 显示内容
//   id: propTypes.string, // 用于关联文本,
//   className: propTypes.string, // 容器类名
//   disibled: propTypes.bool, // 是否禁用
//   onChenge: propTypes.func, // 状态改变时的回调
//   checked: propTypes.bool, // 是否选中
//   defaultChecked: propTypes.bool, // 默认是否选中
// };

export default Radio;
