import React from 'react'
import configureMockStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'
import { searchImagesAction } from '../actions/mediaActions'

const sagaMiddleware = createSagaMiddleware()
const mockStore = configureMockStore([sagaMiddleware])

describe('Store', () => {
  it('should return dispatch action to the api', () => {
    const store = mockStore({})
    const expectedValue = {
      type: 'SEARCH_IMAGES_REQUEST',
      pageNum: 1
    }

    store.dispatch(searchImagesAction(1))
    expect(store.getActions()).toEqual([expectedValue])
  })
})