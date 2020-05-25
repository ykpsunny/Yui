import React, { useMemo } from 'react';

import './RadioGroup.scss';

import propTypes from 'prop-types';

import classnames from 'classnames';

function RadioGroup({ children, name, className, disibled, onChenge, value }) {
  const clas = classnames('yui-radio-group-wrapper', className);

  const renderChildren = useMemo(() => {
    return React.Children.map(children, child => {
      let { value: PrivateValue } = child.props;
      return React.cloneElement(child, {
        name,
        disibled,
        onChenge: checkboxChange,
        checked: PrivateValue === value,
      });
    });
  }, [children, disibled, value]);

  function checkboxChange(e) {
    let { value } = e.target;
    onChenge(value);
  }

  return <div className={clas}>{renderChildren}</div>;
}

RadioGroup.defaultProps = {
  disibled: false,
  onChenge: () => {},
};

RadioGroup.propTypes = {
  name: propTypes.string, // RadioGroup 下所有 input[type="radio"] 的 name 属性
  disibled: propTypes.bool, // 禁选所有子单选器
  onChenge: propTypes.func, // 选项变化时的回调函数
  value: propTypes.string, // 用于设置当前选中的值
  className: propTypes.string, // 容器类名
};

export default RadioGroup;
