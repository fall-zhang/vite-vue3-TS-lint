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