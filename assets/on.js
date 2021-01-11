this.on = function on (target, eventNames, listener) {
  eventNames.forEach((eventName) => {
    target.addEventListener(eventName, listener, false)
  })
}
