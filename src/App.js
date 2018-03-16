import React, { Component } from 'react';
import './App.css';


class FileListing {
  render() {
    return <div></div>
  }
}

class FileBrowser extends Component {
  render() { return(
    <div>File Browser</div>
  );}
}

class ControlBar extends Component {
  render() {
    return <div>Control Bar</div>
  }
}


class App extends Component {
  render() {
    return <div className="container-fluid App">
      <div className="row">
        <div className="col-sm-auto">
          <h2>MediaTab</h2>
        </div>
        <div className="col">
          {/* Menu */}
        </div>
      </div> {/* #headerRow */}
      <div className="row">
        <div className="col">
          <FileBrowser />
        </div>
        <div className="col-4">
          Media info
        </div>
      </div> {/* #contentRow */}
      <div className="row App-control-row">
        <div className="col">
          <ControlBar />
        </div>
      </div> {/* #controlRow */}
    </div>
  }
}

export default App;
