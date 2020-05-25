import React from 'react';

import Table from './';

const titleColumns = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
    className: 'name',
  },
  {
    title: 'Age',
    key: 'age',
    dataIndex: 'age',
    className: 'age',
  },
  {
    title: 'Gender',
    key: 'gender',
    dataIndex: 'gender',
  },
  {
    title: 'Address',
    key: 'address',
    dataIndex: 'address',
  },
];

const dataSources = [
  {
    key: '0',
    name: '张三',
    age: 20,
    gender: 'mail',
    address: '江西南昌',
  },
  {
    key: '1',
    name: '张三',
    age: 20,
    gender: 'mail',
    address: '江西南昌',
  },
  {
    key: '2',
    name: '张三',
    age: 20,
    gender: 'mail',
    address: '江西南昌',
  },
  {
    key: '3',
    name: '张三',
    age: 20,
    gender: 'mail',
    address: '江西南昌',
  },
  {
    key: '4',
    name: '张三',
    age: 20,
    gender: 'mail',
    address: '江西南昌',
  },
  {
    key: '5',
    name: '张三',
    age: 20,
    gender: 'mail',
    address: '江西南昌',
  },
  {
    key: '6',
    name: '张三',
    age: 20,
    gender: 'mail',
    address: '江西南昌',
  },
  {
    key: '7',
    name: '张三',
    age: 20,
    gender: 'mail',
    address: '江西南昌',
  },
  {
    key: '8',
    name: '张三',
    age: 20,
    gender: 'mail',
    address: '江西南昌',
  },
];

function TableDemo() {
  return <Table titleColumns={titleColumns} dataSources={dataSources}></Table>;
}

export default TableDemo;
