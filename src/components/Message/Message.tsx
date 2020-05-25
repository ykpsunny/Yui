import React, { useState } from 'react';

import ReactDOM from 'react-dom';

import './Message.scss';

import propTypes from 'prop-types';

function Message({}) {
  return <div className="yui-message-wrapper"></div>;
}

function open(content, icon, duration, onClose) {
  ReactDOM.createPortal(
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

open.propTypes = {
  icon: propTypes.element,
  onClose: propTypes.func,
  duration: propTypes.number,
  content: propTypes.node,
};

export default Message;
