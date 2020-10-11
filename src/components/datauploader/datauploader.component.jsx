import React from "react";
import "./datauploader.style.scss";

class DataUploader extends React.Component {

    constructor() {
        super();
        this.state = {
            fileName: ""
        }
    }

    handleUpload = () => {
        console.log(this.state.fileName);
        // fetch('http://localhost:3500/parsedata', {
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         fileUrl: this.state.fileName
        //     })
        // }).then(response => response.json())
        // .then(res => {
        //     console.log("Done")
        // })
    }

    render() {
        return <div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Upload your Geojson file</label>
                        <input type="file" 
                               className="form-control-file" 
                               id="exampleFormControlFile1"
                               onChange={e => this.setState({fileName: e.target.value})}
                               />
                    </div>
                    <button className="btn btn-primary" onClick={this.handleUpload}>Add data</button>
              </div>
    }
}

export default DataUploader;