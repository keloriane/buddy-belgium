import {websiteIndexLocalUrl, websiteIndexUrl} from "../config";

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

export const isRootPage = (currentPage, root) => {
  let splitUrl = baseUrl().split('/')
  let mainPageIndex = splitUrl.indexOf("pro")
  const subPageIndex = mainPageIndex + 1

  return baseUrl().split('/')[subPageIndex] === ""
}

export const isCurrentPagePro = (currentPage) => {
  const endOfUrl = baseUrl().split('/')
  return baseUrl().split('/').includes(currentPage) && endOfUrl[endOfUrl.length - 2]
}

export const isCurrentPageIndex = (local) => {
  if (local) {
    return window.location.pathname === websiteIndexLocalUrl
  } else {
    return window.location.pathname === websiteIndexUrl
  }
}
