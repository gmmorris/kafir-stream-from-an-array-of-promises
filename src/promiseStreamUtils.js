import Kefir from 'kefir'
import callFnOnNthCall from './utils'

export const convertArrayOfPromisesToStream = (allPromises) => {
  return Kefir.stream(emitter => {
    let pop = callFnOnNthCall(allPromises.length, emitter.end)
    allPromises.forEach(promise => {
      promise
        .then(
          function () {
            emitter.emit(...arguments)
            pop()
          },
          function () {
            emitter.error(...arguments)
            pop()
          }
         )
    })
  })
}

export const onFirstValue = (stream, fn) => stream.onValue(function callbackOnlyOnce () {
  fn(...arguments)
  stream.offValue(callbackOnlyOnce)
})
