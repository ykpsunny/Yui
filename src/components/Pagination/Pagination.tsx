import React, { useState, useCallback, useMemo, useEffect } from 'react';

import propTypes from 'prop-types';

import classnames from 'classnames';

import './Pagination.scss';

export interface IProps {
  current: number;
  pageSize: number;
  total: number;
  disibled?: boolean;
  hideButton?: boolean;
  onChange: (current: number) => void;
}

let commonClass = classnames('yui-pagination-item');

const Pagination: React.FC<IProps> = ({
  current,
  pageSize,
  total,
  disibled,
  hideButton,
  onChange,
}) => {
  const [stateCurrent, setStateCurrent] = useState(current);

  const pageTotal = useMemo(() => Math.ceil(total / pageSize), [
    total,
    pageSize,
  ]);

  const [prev, setPrev] = useState(stateCurrent === 1);

  const [next, setNext] = useState(pageTotal - 1 === stateCurrent);

  function itemClickHandle(current: number) {
    if (disibled) {
      return;
    }
    setStateCurrent(current);
  }
  function prevClickHanlde() {
    if (stateCurrent > 1) {
      setStateCurrent(state => --state);
    }
  }
  useEffect(() => {
    setNext(pageTotal === stateCurrent);
    setPrev(stateCurrent === 1);
    onChange(stateCurrent);
  }, [stateCurrent]);
  function nextClickHanlde() {
    if (stateCurrent < pageTotal) {
      setStateCurrent(state => ++state);
    }
  }
  function renderPrev() {
    return (
      <li
        key="left"
        className={classnames(commonClass, {
          'yui-pagination-item-disibled': prev || disibled,
        })}
        onClick={prevClickHanlde}
      >
        &lt;
      </li>
    );
  }
  function renderNext() {
    return (
      <li
        key="right"
        className={classnames(commonClass, {
          'yui-pagination-item-disibled': next || disibled,
        })}
        onClick={nextClickHanlde}
      >
        &gt;
      </li>
    );
  }
  const renderItem = useCallback(
    i => {
      const isActive = i === stateCurrent,
        clas = classnames(commonClass, {
          'yui-pagination-item-active': isActive,
          'yui-pagination-item-disibled': disibled,
        });
      return (
        <li key={i} onClick={() => itemClickHandle(i)} className={clas}>
          {i}
        </li>
      );
    },
    [stateCurrent, disibled],
  );
  function renderContent() {
    const liList = [];
    for (let i = 1; i <= pageTotal; i++) {
      liList.push(renderItem(i));
    }
    if (!hideButton) {
      liList.unshift(renderPrev());
      liList.push(renderNext());
    }
    return liList;
  }
  return <ul className="yui-pagination-wrapper">{renderContent()}</ul>;
};

Pagination.defaultProps = {
  current: 1,
  pageSize: 10,
  total: 0,
  disibled: false,
  hideButton: true,
  onChange: () => {},
};

Pagination.propTypes = {
  current: propTypes.number.isRequired, // 当前页数
  pageSize: propTypes.number.isRequired, // 每页条数
  total: propTypes.number.isRequired, // 数据总数
  disibled: propTypes.bool, // 禁用分页
  hideButton: propTypes.bool, // 是否显示 prev, next 按钮
  onChange: propTypes.func.isRequired, //分页发生改变时的回调，返回的参数问当前页
};

export default Pagination;
