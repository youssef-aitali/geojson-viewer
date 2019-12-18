import React from 'react';
import './App.css';
import TopNavbar from './components/navbar/topnavbar.component';
import Map from './components/map/map.component';
import Footer from './components/footer/footer.component';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			showSidebar: false
		};
	}

	toggleSidebar = () => {
		this.setState = ({
			showSidebar: !this.state.showSidebar
		},
		console.log('Updated'));
	};

	render() {
		return (
			<div className="main">
				<TopNavbar showSidebar={this.toggleSidebar} />
				<Map />
				{/* <Footer /> */}
			</div>
		);
	}
}

export default App;
