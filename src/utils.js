
export const callFnOnNthCall = (count, onEnd) => {
  return () => {
    count--
    if (count === 0) {
      onEnd()
    }
  }
}
