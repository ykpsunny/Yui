import React, { useEffect, useState, CSSProperties } from 'react';

import './Modal.scss';

import propTypes from 'prop-types';

import { Button } from '../Button';

import { CloseIcon } from '../../assets/iconfont/icon';

import classnames from 'classnames';

import ReactDOM from 'react-dom';

export interface IProps {
  afterClose?: () => void;
  bodyStyle?: CSSProperties;
  cancelText?: string;
  closable?: boolean;
  confirmLoading?: boolean;
  footer?: React.ReactNode;
  keyboard?: boolean;
  maskStyle?: CSSProperties;
  mask?: boolean;
  okText?: string;
  title?: string;
  visible: boolean;
  wrapClassName?: string;
  onCancel: (e: any) => void;
  onOk?: (e: Event) => void;
  children: React.ReactNode;
  maskClosable?: boolean;
}

const modalOpenClass = 'modal-open-body';

const toggleBodyClass = (visible: boolean) => {
  const body = document.body;
  if (visible) {
    body.classList.add(modalOpenClass);
  } else {
    body.classList.remove(modalOpenClass);
  }
};

const Modal: React.FC<IProps> = ({
  afterClose,
  bodyStyle,
  cancelText,
  okText,
  title,
  closable,
  confirmLoading,
  footer,
  keyboard,
  mask,
  maskStyle,
  visible,
  wrapClassName,
  onCancel,
  onOk,
  children,
  maskClosable,
  ...rest
}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const clas = classnames('yui-mask-wrapper', wrapClassName, {
    'yui-mask-hide': !mask,
  });

  useEffect(() => {
    toggleBodyClass(visible);
    setModalVisible(visible);
  }, [visible]);

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandle, false);
    return () => {
      window.addEventListener('keydown', keyDownHandle, false);
    };
  });

  useEffect(() => {
    return () => {
      afterClose && afterClose();
    };
  });

  function close(e: any) {
    setModalVisible(false);
    onCancel && onCancel(e);
  }

  function clickHandle(e: any) {
    setModalVisible(false);
    onOk && onOk(e);
  }

  function keyDownHandle(e: KeyboardEvent) {
    if (!keyboard) {
      return;
    }
    if (e.which === 27 || e.key === 'Escape' || e.keyCode === 27) {
      close(e);
    }
  }

  function renderFooter() {
    return (
      footer || (
        <div className="yui-modal-footer">
          <Button className="yui-cancel" onClick={close}>
            {cancelText}
          </Button>
          <Button
            type="primary"
            className="yui-submit"
            loading={confirmLoading}
            onClick={clickHandle}
          >
            {okText}
          </Button>
        </div>
      )
    );
  }

  function cancelBubble(e: any) {
    e.stopPropagation();
  }

  function renderModal() {
    return (
      <div
        className={clas}
        style={maskStyle}
        onClick={maskClosable ? close : () => {}}
        {...rest}
      >
        <div className="yui-container" style={bodyStyle} onClick={cancelBubble}>
          <div className="yui-modal-header">
            <h2 className="yui-modal-title">{title}</h2>
            {closable && (
              <div className="yui-close-wrapper" onClick={onCancel}>
                <CloseIcon />
              </div>
            )}
          </div>
          <div className="yui-modal-content">{children}</div>
          {renderFooter()}
        </div>
      </div>
    );
  }

  return modalVisible
    ? ReactDOM.createPortal(<div>{renderModal()}</div>, document.body)
    : null;
};

Modal.defaultProps = {
  cancelText: 'Cancel',
  okText: 'Ok',
  title: 'Default Title',
  closable: true,
  confirmLoading: false,
  keyboard: true,
  mask: true,
  maskClosable: true,
  visible: false,
};

Modal.propTypes = {
  afterClose: propTypes.func, // Modal 完全关闭后的回调
  bodyStyle: propTypes.object, // Modal body 样式
  cancelText: propTypes.string, // 取消按钮文字
  closable: propTypes.bool, // 是否显示右上角的关闭按钮
  confirmLoading: propTypes.bool, // 确定按钮 loading
  footer: propTypes.node, // 底部内容，当不需要默认底部按钮时，可以设为 footer={null}
  keyboard: propTypes.bool, // 是否支持键盘 esc 关闭
  maskStyle: propTypes.object, // 遮罩层样式
  mask: propTypes.bool, // 是否展示遮罩层
  okText: propTypes.string, // 确认按钮文字
  title: propTypes.string, // Modal 标题
  visible: propTypes.bool.isRequired, // Modal 是否可见
  wrapClassName: propTypes.string, // Modal 容器的类名
  onCancel: propTypes.func.isRequired, // 点击遮罩层或右上角叉或取消按钮的回调
  onOk: propTypes.func, // 点击确定回调
  children: propTypes.node.isRequired, // Modal 内容
  maskClosable: propTypes.bool, // 点击遮罩层是否允许关闭
};

export default Modal;
