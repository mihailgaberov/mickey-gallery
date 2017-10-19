/**
 * Created by Mihail on 1/6/2017.
 */
import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './components/App'
import PhotosPageNew from './components/PhotosPageNew'
import VideosPage from './components/VideosPage'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PhotosPageNew} />
		<Route path="videos" component={VideosPage} />
	</Route>
)