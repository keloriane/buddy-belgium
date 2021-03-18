export const delay = (fn, ms) => {
  setTimeout(() => {
    fn()
  }, ms)
}

export const redirect = (path) => {
  return window.location.href + path
}

export const baseUrl = () => {
  return window.location.href
}

export const includeJs = (currentPage) => {
  return baseUrl().split('/').includes(currentPage)
}
