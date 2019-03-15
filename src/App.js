import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <h1 className="title">How's the weather today?</h1>
          <div className="input-group mb-5">
            <input type="text" className="form-control" placeholder="Enter your zipcode" />
            <div className="input-group-append">
              <button className="btn btn-info" type="button">Let's find out!</button>
            </div>
          </div>
          <div className="currentWrapper">
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
