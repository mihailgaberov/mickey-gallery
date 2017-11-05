import { Map } from 'immutable'

export function getPhotos(state) {
  const immutableState = Map(state)
  return immutableState.getIn(['photos'], null)
}

export function getPageNum(state) {
  const immutableState = Map(state)
  return immutableState.getIn(['pageNum'], null)
}

export function saveImages(state, newState) {
  const immutableState = Map(state)
  return immutableState.updateIn(['photos'], arr => {
    return arr.concat(newState)
  })
}

export function savePageNum(state, newState) {
  const immutableState = Map(state)
  return immutableState.updateIn(['pageNum'], val => newState)
}