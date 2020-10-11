import React from 'react';
import './App.css';
import TopNavbar from './components/navbar/topnavbar.component';
import Map from './components/map/map.component';
import DataUploader from './components/datauploader/datauploader.component';

class App extends React.Component {

  render() {
    return (
      <div>
        <TopNavbar />
        <div className="container-fluid">
          <div className="row">
              <div className="col-6 p-0">
                  <Map />
              </div>
              <div className="col-6 p-5">
                  <DataUploader />          
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
