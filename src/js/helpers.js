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

export const isCurrentPageIndex = (local) => {
  if (local) {
    return window.location.pathname === websiteIndexLocalUrl
  } else {
    return window.location.pathname === websiteIndexUrl
  }

}
