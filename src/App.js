import React from 'react';
import './App.css';
import TopNavbar from './components/navbar/topnavbar.component';
import Map from './components/map/map.component';
import Footer from './components/footer/footer.component';

function App() {
	return (
		<div className="main">
			<TopNavbar />
			<Map />
			<Footer />
		</div>
	);
}

export default App;
