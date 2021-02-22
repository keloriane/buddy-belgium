export const html = {
  createElement: (tag, innerHTML = '', className = '') => {
    let element = document.createElement(tag);
    element.innerHTML = innerHTML;
    if (className !== '') {
      element.classList.add(className);
    }
    return element;
  },
};
