/**
 * Created by mgab on 29/03/2017.
 */
import React from 'react'
import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'
import { searchMediaAction } from '../src/actions/mediaActions'

const sagaMiddleware = createSagaMiddleware()
const mockStore = configureMockStore([sagaMiddleware])

describe('Test Store', () => {
  it('should return dispatch action to the api', () => {
    const store = mockStore({})
    const expectedValue = {
      type: 'SEARCH_MEDIA_REQUEST'
    }

    store.dispatch(searchMediaAction())
    expect(store.getActions()).toEqual([expectedValue])
  })
})