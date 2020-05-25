import React, { useMemo, useState, ReactElement } from 'react';

import './CheckboxGroup.scss';

import propTypes from 'prop-types';

import classnames from 'classnames';

export interface IProps {
  name: string;
  disibled?: boolean;
  onChenge?: (checkedValue: Array<string | number | boolean>) => void;
  value?: Array<string | number>;
  className?: string;
  children: React.ReactElement;
}

const CheckboxGroup: React.FC<IProps> = ({
  children,
  name,
  className,
  disibled,
  onChenge,
  value,
}) => {
  const clas = classnames('yui-checkbox-group-wrapper', className);
  const [checkedInst] = useState(() => {
    let hashMap: any = {};
    if (Array.isArray(value)) {
      value.forEach(item => (hashMap[item] = true));
    }
    return hashMap;
  });

  const renderChildren = useMemo(() => {
    return React.Children.map(children, (Child: React.ReactElement<any>) => {
      let { value } = Child.props;
      return React.cloneElement(Child, {
        name,
        disibled,
        onChenge: checkboxChange,
        checked: !!checkedInst[value],
      });
    });
  }, [children, checkedInst, disibled, name]);

  function handleCheckedInst(checkedInst: {
    [x: string]: any;
    hasOwnProperty: (arg0: string) => any;
  }) {
    let checkedValue = [];
    for (let prop in checkedInst) {
      if (checkedInst.hasOwnProperty(prop) && checkedInst[prop]) {
        checkedValue.push(prop);
      }
    }
    return checkedValue;
  }

  function checkboxChange(e: any) {
    let { value, checked } = e.target;
    checkedInst[value] = checked;
    onChenge && onChenge(handleCheckedInst(checkedInst));
  }

  return <div className={clas}>{renderChildren}</div>;
};

CheckboxGroup.defaultProps = {
  disibled: false,
  onChenge: () => {},
  value: [],
};

CheckboxGroup.propTypes = {
  name: propTypes.string.isRequired, // checkboxGroup 下所有 input[type="checkbox"] 的 name 属性
  disibled: propTypes.bool, // 禁选所有子单选器
  onChenge: propTypes.func, // 选项变化时的回调函数
  value: propTypes.array, // 选中项
  className: propTypes.string,
};

export default CheckboxGroup;
