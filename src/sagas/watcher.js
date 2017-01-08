/**
 * Created by Mihail on 1/7/2017.
 */
import { takeLatest } from 'redux-saga/effects';
import { searchMediaSaga } from './mediaSaga';
import * as types from '../constants/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchSearchMedia() {
	yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}