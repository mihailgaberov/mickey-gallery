/**
 * Created by Mihail on 1/6/2017.
 */
import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = () => (
	<div className="text-center">
		<nav className="navbar navbar-default">
			<IndexLink to="/" activeClassName="active">Photos</IndexLink>
			{" | "}
			<Link to="gallery" activeClassName="active">Videos</Link>
		</nav>
	</div>
)

export default Header