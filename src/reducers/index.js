import { combineReducers } from 'redux';
import images from './imageReducer';
import videos from './videoReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
	images,
	videos
});

export default rootReducer;