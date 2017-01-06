/**
 * Created by Mihail on 1/6/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('root')
);