/**
 * Created by Mihail on 1/6/2017.
 */
import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
	<div className="text-center">
		<nav className="navbar navbar-default">
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="library" activeClassName="active">Gallery</Link>
		</nav>
	</div>
);

export default Header;