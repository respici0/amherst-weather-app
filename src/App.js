import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
    }
  }

  onChange = e => {
    let zipcode = e.target.value;
    this.setState({
      zipcode
    })
    console.log(this.state.zipcode);
  }

  onButtonClick = () => {
    console.log("Button clicked");
  }

  render() {
    return (
      <React.Fragment>
        <div className="content">
          <h1 className="title">How's the weather today?</h1>
          <div className="input-group mb-5">
            <input type="text" className="form-control" placeholder="Enter your zipcode" onChange={this.onChange} value={this.state.value} />
            <div className="input-group-append">
              <button className="btn btn-info" type="button" onClick={this.onButtonClick}><i class="fas fa-cloud-sun"></i> Let's find out!</button>
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
