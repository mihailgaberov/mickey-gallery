/**
 * Created by Mihail on 1/6/2017.
 */
import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
	render() {
		return (
			<div className="container-fluid text-center">
				<Header />
				{this.props.children}
			</div>
		);
	}
}
App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;