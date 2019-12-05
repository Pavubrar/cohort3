import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyComp, EvenComp, OddComp } from './components/MyComponent';

class App extends React.Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };

  }
  onPushMe = () => {
    this.counter++;
    this.setState({
      myState: " now: " + this.counter
    });

    console.log(this.counter);
    console.log("You pushed me");
  }

  render() {
      let message;
      if (this.state.counter % 2 === 0) {
        message = <EvenComp />
      } else {
        message = <OddComp />
      }
      return (
        <div className="App">
          <header className="App-header">
            <MyComp whatToSay="What Ever" pushMe={this.onPushMe} />
            {message}
            <img src={logo} className="App-logo" alt="logo" />
            Hello World
          <h1>I am in control of this application and my name is Parveen Kaur {this.counter}{this.state.myState}</h1>{/* Edit <code>src/App.js</code> and save to reload. */}
            <button onClick={this.onPushMe}>
              Push Me
            </button>
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
        </div>
      );
    }
  }
  export default App;


