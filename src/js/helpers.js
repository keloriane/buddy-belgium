export const delay = (fn, ms) => {
  setTimeout(() => {
    fn()
  }, ms)
}

export const redirect = (path) => {
  return window.location.href + path
}
