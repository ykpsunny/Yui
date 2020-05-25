import React from 'react';

import './Button-Group.scss';

import classnames from 'classnames';

import propTypes from 'prop-types';

export interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const ButtonGroup: React.FC<IProps> = ({ className, children, ...rest }) => {
  const clas = classnames('yui-btn-group', className);
  return (
    <div className={clas} {...rest}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  className: propTypes.string,
};

export default ButtonGroup;
