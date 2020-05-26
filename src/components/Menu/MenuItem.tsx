import React from 'react';

import './MenuItem.scss';

import classnames from 'classnames';

export interface IProps {
  children?: React.ReactNode;
  className?: string;
}

const MenuItem: React.FC<IProps> = ({ children, className, ...rest }) => {
  return (
    <li className={classnames('yui-Menu-item-wrapper', className)} {...rest}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {};

MenuItem.propTypes = {};

export default MenuItem;
