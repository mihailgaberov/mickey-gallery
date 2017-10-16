/**
 * Created by Mihail on 1/6/2017.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import PhotosPage from './components/PhotosPage'
import VideosPage from './components/VideosPage'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PhotosPage} />
		<Route path="videos" component={VideosPage} />
	</Route>
)