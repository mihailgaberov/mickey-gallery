/**
 * Created by Mihail on 1/8/2017.
 */
import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';

// Here we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.

export default function* startForeman () {
	yield fork(watchSearchMedia);
}