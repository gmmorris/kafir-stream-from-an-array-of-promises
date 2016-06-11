import createPlacement from './src/placement'
import { convertArrayOfPromisesToStream, onFirstValue } from './src/promiseStreamUtils'

function createPlacements (howMany) {
  let allPlacements = []
  for (let index = 0; index < howMany; index++) {
    allPlacements.push(createPlacement(index))
  }
  return allPlacements
}

function onFoundFirstPlacement (winner) {
  winner.markChosen()
  console.log(`found placement index of ${winner.index}`)
  streamOfPlacementFinderPromises.offValue(onFoundFirstPlacement)
}

function onPlacementTimedOut (placement) {
  placement.markTimeout()
  console.log(`Timeout on placement ${placement.index}`)
}

function onFoundAllPlacements (allPlacements) {
  return () => {
    console.log('All promises finished')
    allPlacements.forEach(placement => {
      console.log(`${placement.index}: ${JSON.stringify(placement.health)}`)
    })
  }
}

let allPlacements = createPlacements(5)
let allPlacementFinderPromises = allPlacements.map(placement => placement.find())
let streamOfPlacementFinderPromises = convertArrayOfPromisesToStream(allPlacementFinderPromises)
onFirstValue(streamOfPlacementFinderPromises, onFoundFirstPlacement)
streamOfPlacementFinderPromises.onError(onPlacementTimedOut)
streamOfPlacementFinderPromises.onEnd(onFoundAllPlacements(allPlacements))
