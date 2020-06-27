import React, { useEffect, useState, useMemo } from 'react';

import './Table.scss';

import propTypes from 'prop-types';

import classnames from 'classnames';

export interface IProps {
  titleColumns: [
    { title: string; key: string; dataIndex: string; className: string },
  ]; // Table 标题数据
  dataSources: [
    { key: string; name: string; age: number; gender: string; address: string },
  ]; // Table 内容数据
  rowKey: string; // 表格行 key 的取值
  bordered: boolean; // 是否显示 td 边框
  align: 'left' | 'center' | 'right'; // 文字对齐方式
  fixedTitle: boolean; // 列是否固定，可选
  ellipsis: boolean; // 文字超出是否隐藏打点展示
  className?: string;
}

const Table: React.FC<IProps> = ({
  titleColumns,
  dataSources,
  bordered,
  rowKey,
  align,
  className,
  fixedTitle,
  ellipsis,
}) => {
  const clas = classnames(
    'yui-table-container',
    `yui-table-${align}`,
    {
      'yui-table-border': bordered,
      'yui-table-ellipsis': ellipsis,
    },
    className,
  );
  function renderTitle() {
    const titleNode = titleColumns.map(item => {
      const { title, className, key } = item,
        clas = classnames('yui-column-title', className);
      return (
        <th className={clas} key={key}>
          <span className="yui-text">{title}</span>
        </th>
      );
    });
    return titleNode;
  }
  function renderRow() {
    return dataSources.map((item: any) => {
      const { className, key } = item;
      const clas = classnames('yui-row', className);
      return (
        <tr className={clas} key={key}>
          {titleColumns.map(j => {
            const { dataIndex, className } = j,
              clas = classnames('yui-column', className);
            return (
              <td key={dataIndex} className={clas}>
                <span className="yui-text">{item[dataIndex]}</span>
              </td>
            );
          })}
        </tr>
      );
    });
  }
  return (
    <div className="yui-table-wrapper">
      <table className={clas}>
        <thead className={classnames({ 'yui-fixed-title': fixedTitle })}>
          <tr className="yui-row">{renderTitle()}</tr>
        </thead>
        <tbody>{renderRow()}</tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  rowKey: 'key',
  bordered: false,
  align: 'left',
  fixedTitle: false,
  ellipsis: true,
};

// Table.propTypes = {
//   titleColumns: propTypes.arrayOf(propTypes.object).isRequired, // Table 标题数据
//   dataSources: propTypes.arrayOf(propTypes.object).isRequired, // Table 内容数据
//   rowKey: propTypes.string, // 表格行 key 的取值
//   bordered: propTypes.bool, // 是否显示 td 边框
//   align: propTypes.oneOf(['left', 'center', 'right']), // 文字对齐方式
//   fixedTitle: propTypes.bool, // 列是否固定，可选
//   ellipsis: propTypes.bool, // 文字超出是否隐藏打点展示
// };

export default Table;
