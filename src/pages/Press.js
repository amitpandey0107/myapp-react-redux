import React, {Component} from 'react';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';

class Press extends Component {
	render() {
		return(
			<div className="main">
				<Header/>
				<div className="contactWrap">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<h1>Press Page</h1>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Press;