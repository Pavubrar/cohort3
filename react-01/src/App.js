import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './components/MyComponent';

class App extends React.Component {
  constructor(){
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

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hello World
          <h1>I am in control of this application and my name is Parveen Kaur {this.counter}{this.state.myState}</h1>{/* Edit <code>src/App.js</code> and save to reload. */}
          <button onClick={this.onPushMe}>
              Push Me
            </button>
  
          </p>
          <MyComp />


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
