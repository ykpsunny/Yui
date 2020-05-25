import React, { useEffect, useState, CSSProperties } from 'react';

import './Drawer.scss';

import propTypes from 'prop-types';

import { CloseIcon } from '../../assets/iconfont/icon';

import classnames from 'classnames';

import ReactDOM from 'react-dom';

export interface IProps {
  title?: React.ReactNode | string;
  visible?: boolean;
  width?: string | number;
  wrapperStyle?: CSSProperties;
  className?: string;
  maskStyle?: CSSProperties;
  position?: 'left' | 'right';
  contentClassName?: string | [] | object;
  closable?: boolean;
  keyboard?: boolean;
  maskClosable?: boolean;
  onClose?: (e: any) => void; // 关闭之后的回调函数
  mask?: boolean; // 是否显示遮罩层
  getContainer?: HTMLElement; // 挂载的容器， 默认挂载在 body 上
}
const Drawer: React.FC<IProps> = ({
  title,
  visible,
  width,
  wrapperStyle,
  className,
  maskStyle,
  position,
  children,
  contentClassName,
  closable,
  keyboard,
  maskClosable,
  onClose,
  mask,
  getContainer,
}) => {
  const wrapperClas = classnames(
      'yui-drawer-wrapper',
      `yui-drawer-${position}`,
      className,
    ),
    contentClas = classnames('yui-drawer-content', contentClassName),
    maskClas = classnames('yui-drawer-mask', {
      'yui-drawer-mask-visibility': !mask,
    }),
    [state, setState] = useState(visible);
  function closeHandle(e: React.MouseEvent | KeyboardEvent) {
    setState(false);
    onClose && onClose(e);
  }
  function keyDownHandle(e: KeyboardEvent) {
    if (!keyboard) {
      return;
    }
    if (e.which === 27 || e.key === 'Escape' || e.keyCode === 27) {
      closeHandle(e);
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', keyDownHandle, false);
    return () => {
      window.addEventListener('keydown', keyDownHandle, false);
    };
  });
  if (!state) {
    return null;
  }
  function renderTitle() {
    return (
      <div className="yui-drawer-title">
        <div className="yui-title-inner">{title}</div>
        {closable && (
          <div className="yui-drawer-colse" onClick={closeHandle}>
            <CloseIcon />
          </div>
        )}
      </div>
    );
  }
  function render() {
    let container = getContainer;
    if (container instanceof HTMLElement) {
      container.style.position = 'relative';
    } else {
      container = document.body;
    }
    return ReactDOM.createPortal(
      <div>
        <div
          className={maskClas}
          style={maskStyle}
          onClick={maskClosable ? close : () => {}}
        >
          <div
            className={wrapperClas}
            style={{ width, ...wrapperStyle }}
            onClick={e => e.stopPropagation()}
          >
            {renderTitle()}
            <div className={contentClas}>{children}</div>
          </div>
        </div>
      </div>,
      container,
    );
  }
  return render();
};

Drawer.defaultProps = {
  title: 'Title',
  visible: true,
  width: 240,
  wrapperStyle: {},
  maskStyle: {},
  position: 'left',
  closable: true,
  keyboard: false,
  maskClosable: true,
  mask: true,
  getContainer: document.body,
};

Drawer.propTypes = {
  title: propTypes.node, // 显示标题
  visible: propTypes.bool, // 是否显示 drawer
  width: propTypes.oneOfType([propTypes.number, propTypes.string]), // drawer 宽度，默认 240px
  wrapperStyle: propTypes.object, // 容器样式
  className: propTypes.string, // 容器类名
  maskStyle: propTypes.object, // 遮罩层样式
  position: propTypes.oneOf(['left', 'right']), // drawer 出现位置
  contentClassName: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
    propTypes.object,
  ]), // 内容类名
  closable: propTypes.bool, // 是否显示关闭按钮
  keyboard: propTypes.bool, // 是否支持 Esc 键退出, 默认是 false
  maskClosable: propTypes.bool, // 点击 mask 是否允许关闭, 默认是 true
  onClose: propTypes.func, // 关闭之后的回调函数
  mask: propTypes.bool, // 是否显示遮罩层
  getContainer: propTypes.instanceOf(HTMLElement), // 挂载的容器， 默认挂载在 body 上
};

export default Drawer;
