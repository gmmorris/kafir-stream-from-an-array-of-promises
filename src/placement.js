function Placement (index) {
  this.health = {}
  this.index = index

  this.markFound = () => Object.assign(this.health, { found: true })
  this.markChosen = () => Object.assign(this.health, { chosen: true })
  this.markTimeout = () => Object.assign(this.health, { timeout: true })

  this.find = () => new Promise((resolve, reject) => {
    let wait = parseInt(Math.random() * 1000)
    console.log(wait)
    if (wait < 250) {
      this.markFound()
      resolve(this)
    } else if (wait > 800) {
      setTimeout(() => {
        this.markTimeout()
        reject(this)
      }, wait)
    } else {
      setTimeout(() => {
        this.markFound()
        resolve(this)
      }, wait)
    }
  })
  return this
}

export default (index) => new Placement(index)
