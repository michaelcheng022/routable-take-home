export const throttle = (func, limit) => {
  let isThrottling
  return function() {
    const args = arguments
    const context = this
    if (!isThrottling) {
      func.apply(context, args)
      isThrottling = true
      setTimeout(() => isThrottling = false, limit)
    }
  }
}
