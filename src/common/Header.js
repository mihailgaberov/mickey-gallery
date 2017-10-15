/**
 * Created by Mihail on 1/6/2017.
 */
import React from 'react'
import { Link, IndexLink } from 'react-router'
import Navigation from '../components/StyledComponents/Navigation'

const Header = () => (
	<Navigation>
    <li><IndexLink to="/" activeClassName="active">Photos</IndexLink></li>
    <li><Link to="gallery" activeClassName="active">Videos</Link></li>
	</Navigation>
)

export default Header