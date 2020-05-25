import React, { useRef, useEffect, useMemo } from 'react';

import propTypes from 'prop-types';

import BezierEasing from 'bezier-easing';

function transfromDeg(deg) {
  return (deg / 180) * Math.PI;
}

function getPosition(radius, deg) {
  let x = 0;
  let y = 0;
  if (deg >= 0 && deg <= 90) {
    // 0~90度
    x = radius * (1 + Math.cos(transfromDeg(deg)));
    y = radius * (1 + Math.sin(transfromDeg(deg)));
  } else if (deg > 90 && deg <= 180) {
    // 90~180度
    x = radius * (1 - Math.cos(transfromDeg(180 - deg)));
    y = radius * (1 + Math.sin(transfromDeg(180 - deg)));
  } else if (deg > 180 && deg <= 270) {
    // 180~270度
    x = radius * (1 - Math.sin(transfromDeg(270 - deg)));
    y = radius * (1 - Math.cos(transfromDeg(270 - deg)));
  } else {
    // 270~360度
    x = radius * (1 + Math.cos(transfromDeg(360 - deg)));
    y = radius * (1 - Math.sin(transfromDeg(360 - deg)));
  }
  return { x, y };
}

function Progress({ circleConfig, pointConfig, textConfig, arcConfig }) {
  const myCanvas = useRef();

  const canvasRadius = useMemo(() => {
    return circleConfig.radius + pointConfig.radius;
  }, [circleConfig.radius, pointConfig.radius]);

  const size = 2 * canvasRadius;
  const numberPercentage = useMemo(() => {
    let { percentage } = arcConfig;
    return Number(percentage.slice(0, percentage.length - 1));
  });

  const endDeg = useMemo(() => {
    return ((360 * numberPercentage) / 100 + arcConfig.startDeg) % 360;
  }, [arcConfig.startDeg, numberPercentage]);

  const EasFunc = useMemo(() => {
    let easingParams = arcConfig.easing.split(',').map(item => +item);
    return BezierEasing(...easingParams);
  }, [arcConfig.easing]);

  function init(canvas) {
    let ctx = canvas.getContext('2d');
    if (arcConfig.percentage === '0%') {
      drawArcAnimate(ctx, endDeg, 0, 0);
    } else {
      if (arcConfig.animated) {
        drawArcAnimate(ctx, endDeg, 1, arcConfig.duration * 60);
      } else {
        draw(ctx, endDeg, 0, 0);
        drawArc(ctx, endDeg);
      }
    }
  }

  function draw(ctx, endDeg, setpStart, stepTotal) {
    drawCircle(ctx);
    drawPoint(ctx, endDeg);
    drawText(ctx, setpStart, stepTotal);
  }

  function drawCircle(ctx) {
    ctx.strokeStyle = circleConfig.lineColor;
    ctx.lineWidth = circleConfig.lineWidth;
    ctx.beginPath();
    ctx.arc(
      canvasRadius,
      canvasRadius,
      circleConfig.radius,
      0,
      transfromDeg(360),
    );
    ctx.stroke();
  }

  function drawText(ctx, setpStart, stepTotal) {
    let {
      showText,
      label,
      color,
      font,
      textAlign,
      verticalAlign,
      format,
    } = textConfig;
    if (!showText) return;
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = textAlign;
    ctx.textBaseline = verticalAlign;
    const percent =
      stepTotal > 0
        ? Math.round(EasFunc(setpStart / stepTotal) * numberPercentage)
        : 0;
    if (typeof textConfig.format === 'function') {
      label = textConfig.format(percent);
    } else {
      label = percent + '%';
    }
    ctx.fillText(label, canvasRadius, canvasRadius);
  }

  function drawPoint(ctx, endDeg) {
    let { radius, fillColor } = pointConfig;
    let { x, y } = getPosition(circleConfig.radius, endDeg);
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(x + radius, y + radius, radius, 0, transfromDeg(360));
    ctx.fill();
  }

  function drawArc(ctx, endDeg) {
    let { color, lineWidth, startDeg } = arcConfig;
    if (Array.isArray(color)) {
      let gradient = ctx.createLinearGradient(
        circleConfig.radius,
        0,
        circleConfig.radius,
        circleConfig.radius * 2,
      );
      color.forEach(item => gradient.addColorStop(item.percent, item.color));
      color = gradient;
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(
      canvasRadius,
      canvasRadius,
      circleConfig.radius,
      transfromDeg(startDeg),
      transfromDeg(endDeg),
    );
    ctx.stroke();
  }

  useEffect(() => {
    if (myCanvas.current) {
      init(myCanvas.current);
    }
  }, []);

  function drawArcAnimate(ctx, endDeg, setpStart, stepTotal) {
    requestAnimationFrame(() => {
      ctx.clearRect(0, 0, size, size);
      const nextDeg = getTargetDeg(
        arcConfig.startDeg,
        endDeg,
        setpStart,
        stepTotal,
      );
      draw(ctx, nextDeg, setpStart, stepTotal);
      // 画进度弧线
      if (stepTotal > 0) {
        drawArc(ctx, nextDeg);
      }
      if (setpStart !== stepTotal) {
        setpStart++;
        drawArcAnimate(ctx, endDeg, setpStart, stepTotal);
      }
    });
  }

  // 顺时针方向，根据开始deg，结束deg，以及步进值step，求取目标deg
  function getTargetDeg(startDeg, endDeg, setpStart, stepTotal) {
    if (stepTotal === 0) {
      return startDeg;
    }
    startDeg = startDeg % 360;
    endDeg = endDeg % 360;
    if (startDeg > endDeg) {
      const diff = endDeg + 360 - startDeg;
      let nextDeg = startDeg + diff * EasFunc(setpStart / stepTotal);
      if (nextDeg > 360) {
        nextDeg = nextDeg - 360;
        return nextDeg > endDeg ? endDeg : nextDeg;
      }
      return nextDeg;
    } else if (startDeg < endDeg) {
      const diff = endDeg - startDeg;
      let nextDeg = startDeg + diff * EasFunc(setpStart / stepTotal);
      if (nextDeg > endDeg) {
        return endDeg;
      } else if (nextDeg > 360) {
        return nextDeg - 360;
      }
      return nextDeg;
    } else {
      return startDeg + 360 * EasFunc(setpStart / stepTotal);
    }
  }

  return (
    <canvas width={size} height={size} ref={myCanvas}>
      你的浏览器不支持 canvas ! ! !
    </canvas>
  );
}

Progress.defaultProps = {
  circleConfig: {
    radius: 40,
    lineWidth: 2,
    lineColor: '#000',
  },
  pointConfig: {
    radius: 6,
    fillColor: '#f00',
  },
  textConfig: {
    showText: true,
    label: '30%',
    color: '#000',
    font: '14px arial',
    textAlign: 'center',
    verticalAlign: 'middle',
    format: percent => percent * 50 + '人',
  },
  arcConfig: {
    startDeg: 270, // 起始角度
    // color: "#f00", // 如果使用渐变色则传递一个数组
    color: [
      {
        percent: 0,
        color: '#f93',
      },
      {
        percent: 1,
        color: '#ff4949',
      },
    ],
    lineWidth: 4,
    percentage: '30%',
    animated: true,
    easing: '0.42,0,1,1',
    duration: 1, // 动画的时长
  },
};

Progress.propTypes = {
  circleConfig: propTypes.object,
  pointConfig: propTypes.object,
  textConfig: propTypes.object,
  arcConfig: propTypes.object,
};

export default Progress;
