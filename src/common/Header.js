/**
 * Created by Mihail on 1/6/2017.
 */
import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = () => (
	<div>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="gallery" activeClassName="active">Gallery</Link>
	</div>
)

export default Header