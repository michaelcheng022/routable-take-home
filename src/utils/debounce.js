export const debounce = (fn, delay) => {
  let timeoutId
  return function(...args) {
    const context = this

    // if there is a previous timeout in the task queue, clear it
    // this prevents multiple calls
    if(timeoutId) {
      clearTimeout(timeoutId)
    }

    // setTimeout returns a id
    timeoutId = setTimeout(() =>
      fn.apply(context, args)
    , delay)
   }
  }
