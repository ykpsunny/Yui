import React, { useState } from 'react';

import ReactDOM from 'react-dom';

import './Message.scss';

import propTypes from 'prop-types';

const Message = ({}) => {
  return <div className="yui-message-wrapper"></div>;
};

function open(
  content: React.ReactNode,
  icon: React.ReactNode,
  duration: number,
  onClose: () => void,
) {
  return ReactDOM.createPortal(
    <div className="yui-message">
      <div className="yui-message-content">
        <i>{icon}</i>
        <span>{content}</span>
      </div>
    </div>,
    document.body,
  );
}

Message.open = open;

// Message.success;

// Message.warn;

// Message.error;

export default Message;
