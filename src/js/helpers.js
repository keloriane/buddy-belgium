import {websiteIndexLocalUrl, websiteIndexUrl} from "../config";

export const baseUrl = () => {
  return window.location.href
}

export const getBaseUrlSplitOnSlashes = () =>{
  return baseUrl().split('/')
}

export const delay = (fn, ms) => {
  setTimeout(() => {
    fn()
  }, ms)
}

export const redirect = (path) => {
  return window.location.href + path
}

export const includeJs = (currentPage) => {
  return getBaseUrlSplitOnSlashes().includes(currentPage)
}

export const isRootPage = (name, applyToSubPage = false) => {
  const urlLength = getBaseUrlSplitOnSlashes().length
  if(!applyToSubPage){
    return getBaseUrlSplitOnSlashes()[urlLength -1] === name;
  }
  else{
    return includeJs(name)
  }
}

export const IsSubPage = (rootPageName, subPageName) => {
  return getBaseUrlSplitOnSlashes().includes(rootPageName) && getBaseUrlSplitOnSlashes().includes(subPageName);
}

export const isCurrentPageIndex = () => {
  return document.location.pathname === "/"
}

