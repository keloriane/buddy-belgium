export const _event = {
  domIsReady(fn) {
    document.addEventListener('DOMContentLoaded', () => {
      fn();
    });
  },

  siteIsLoaded(fn) {
    window.addEventListener('load', () => {
      fn()
    });
  }
};


