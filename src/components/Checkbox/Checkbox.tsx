import React, { useState } from 'react';

import './Checkbox.scss';

import propTypes from 'prop-types';

import classnames from 'classnames';

export interface IProps {
  children: React.ReactNode;
  idFiled: string;
  className?: string;
  disibled?: boolean;
  onChenge?: React.ChangeEventHandler<HTMLElement>;
  checked?: boolean;
}

const Checkbox: React.FC<IProps> = ({
  idFiled,
  className,
  disibled,
  onChenge,
  checked,
  children,
  ...rest
}) => {
  const clas = classnames('yui-checkbox-wrapper', className);
  const [privateChecked, setPrivateChecked] = useState(checked);
  function checkedChange(e: any) {
    let { checked } = e.target;
    if (disibled) return;
    setPrivateChecked(checked);
    onChenge && onChenge(e);
  }
  return (
    <div className={clas}>
      <label
        htmlFor={idFiled}
        className={classnames('yui-label', {
          'yui-label-disibled': disibled,
          'yui-label-checked': privateChecked,
        })}
      >
        <input
          type="checkbox"
          id={idFiled}
          className="yui-checkbox-input"
          defaultChecked={privateChecked}
          onClick={checkedChange}
          {...rest}
        />
        <div className="yui-label-text">{children}</div>
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  disibled: false,
  checked: false,
  onChenge: () => {},
};

Checkbox.propTypes = {
  children: propTypes.node.isRequired, // 显示内容
  idFiled: propTypes.string.isRequired, // 用于关联文本,
  className: propTypes.string, // 容器类名
  disibled: propTypes.bool, // 是否禁用
  onChenge: propTypes.func, // 状态改变时的回调
  checked: propTypes.bool, // 是否选中
};

export default Checkbox;
