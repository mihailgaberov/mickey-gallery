/**
 * Created by mgab on 29/03/2017.
 */
import React from 'react'
import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'
import { searchImagesAction } from '../src/actions/mediaActions'

const sagaMiddleware = createSagaMiddleware()
const mockStore = configureMockStore([sagaMiddleware])

describe('Test Store', () => {
  it('should return dispatch action to the api', () => {
    const store = mockStore({})
    const expectedValue = {
      type: 'SEARCH_IMAGES_REQUEST'
    }

    store.dispatch(searchImagesAction())
    expect(store.getActions()).toEqual([expectedValue])
  })
})