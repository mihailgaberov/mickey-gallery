/**
 * Created by Mihail on 1/6/2017.
 */
import React from 'react'
import { Link } from 'react-router'

const HomePage = () => (
	<div className="jumbotron center">
		<h1 className="lead">Mickey's Gallery</h1>
		<div>
			<Link to="library">
				<button className="btn btn-lg btn-primary"> Visit Gallery</button>
			</Link>
		</div>
	</div>
)

export default HomePage