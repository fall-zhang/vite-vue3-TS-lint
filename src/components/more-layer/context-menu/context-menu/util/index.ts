const PREFIX_CLS = 've-contextmenu-'

export function clsName(cls:string) {
  return PREFIX_CLS + cls
}

// icon name
export const ICON_NAMES = {
  FILTER: 'filter',

  DOUBLE_RIGHT_ARROW: 'double-right-arrow',
  DOUBLE_LEFT_ARROW: 'double-left-arrow',

  TOP_ARROW: 'top-arrow',
  RIGHT_ARROW: 'right-arrow',
  BOTTOM_ARROW: 'bottom-arrow',
  LEFT_ARROW: 'left-arrow',

  SORT_TOP_ARROW: 'sort-top-arrow',
  SORT_BOTTOM_ARROW: 'sort-bottom-arrow',

  SEARCH: 'search',
}

// init data
export const INIT_DATA = {
  // PARENT_ID: 0,
  PARENT_DEEP: -1,
}

// contextmenu types
export const CONTEXTMENU_NODE_TYPES = {
  // Separator
  SEPARATOR: 'SEPARATOR',
}

// comps name
export const COMPS_NAME = {
  VE_CONTEXTMENU: 'VeContextmenu',
}

export function getRandomId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export function getMousePosition(event:MouseEvent) {
  let x = 0
  let y = 0
  const doc = document.documentElement
  const body = document.body
  if (window.scrollY) {
    // pageYoffset 是 Netscape 特有
    x = window.scrollX
    y = window.scrollY
  } else {
    x =            ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
            ((doc && doc.clientLeft) || (body && body.clientLeft) || 0)
    y =            ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
            ((doc && doc.clientTop) || (body && body.clientTop) || 0)
  }
  x += event.clientX
  y += event.clientY

  const right = doc.clientWidth - event.clientX
  const bottom = doc.clientHeight - event.clientY

  return { left: x, top: y, right, bottom }
}
export function getViewportOffset(triggerEl:Element) {
  const doc = document.documentElement
  const box = triggerEl.getBoundingClientRect()

  const scrollLeft = doc.scrollLeft - (doc.clientLeft || 0)
  const scrollTop = doc.scrollTop - (doc.clientTop || 0)
  const offsetLeft = box.left
  const offsetTop = box.top

  const left = offsetLeft - scrollLeft
  const top = offsetTop - scrollTop

  return {
    offsetTop,
    offsetLeft,
    left,
    top,
    right: window.document.documentElement.clientWidth - box.width - left,
    bottom: window.document.documentElement.clientHeight - box.height - top,
    right2: window.document.documentElement.clientWidth - left,
    bottom2: window.document.documentElement.clientHeight - top,
  }
}
