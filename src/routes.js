/**
 * Created by Mihail on 1/6/2017.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomePage from './components/HomePage'
import MediaGalleryPage from './containers/MediaGalleryPage'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="gallery" component={MediaGalleryPage} />
	</Route>
)