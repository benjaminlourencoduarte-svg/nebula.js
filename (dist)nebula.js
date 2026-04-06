(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.nebulajs = factory());
})(this, (function () {
  'use strict';

  const nebulajs = {
    moveRot(element, { x = 100, y = 100, rotation = 45, duration = 1000 } = {}) {
      element.style.transition = `transform ${duration}ms ease-in-out`;
      element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    },

    fadeIn(element, duration = 1000) {
      element.style.transition = `opacity ${duration}ms ease-in-out`;
      element.style.opacity = 1;
    },

    fadeOut(element, duration = 1000) {
      element.style.transition = `opacity ${duration}ms ease-in-out`;
      element.style.opacity = 0;
    },

    scale(element, factor = 1.5, duration = 1000) {
      element.style.transition = `transform ${duration}ms ease-in-out`;
      element.style.transform = `scale(${factor})`;
    },

    orbit(element, centerX = 0, centerY = 0, radius = 100, speed = 2) {
      let angle = 0;
      setInterval(() => {
        angle += speed;
        const x = centerX + radius * Math.cos(angle * Math.PI / 180);
        const y = centerY + radius * Math.sin(angle * Math.PI / 180);
        element.style.transform = `translate(${x}px, ${y}px)`;
      }, 30);
    },

    pulse(element, duration = 1000, scaleFactor = 1.2) {
      element.style.transition = `transform ${duration}ms ease-in-out`;
      element.style.transform = `scale(${scaleFactor})`;
      setTimeout(() => {
        element.style.transform = `scale(1)`;
      }, duration);
    },

    supernova(element, duration = 1000) {
      element.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
      element.style.transform = `scale(3)`;
      element.style.opacity = 0;
    }
  };

  return nebulajs;
}));
