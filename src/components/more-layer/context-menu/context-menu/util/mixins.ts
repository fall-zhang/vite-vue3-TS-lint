export default {
  mounted (el, binding, vNode) {
    // console.log('222222')
    const { events, callback } = binding.value

    if (
      Array.isArray(events) &&
      events.length &&
      typeof callback === 'function'
    ) {
      const handler = (e) => {
        if (!el.contains(e.target) && el !== e.target) {
          callback(e)
        } else {
          return false
        }
      }

      el.__eventsOutside__ = handler

      events.forEach((eventName) => {
        document.addEventListener(eventName, handler, true)
      })
    } else {
      const compName = vNode.context.name
      console.error(
        `[events-outside] Please provided 'events' and 'callback' in ${compName}`,
      )
    }
  },

  unmounted (el, binding, vNode) {
    const { events } = binding.value
    events.forEach((eventName) => {
      document.removeEventListener(eventName, el.__eventsOutside__, true)
    })
    el.__eventsOutside__ = null
  },
}
