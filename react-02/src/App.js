import React from 'react';
import logo, { ReactComponent as ReactLogo } from './logo.svg';
import './App.css';
import settings from './icons/cog.svg'
import ticTacToe from './icons/tic-tac-toe.svg'
import hooks from './icons/meat-hook.svg'
import coins from './icons/money-stack.svg'
import city from './icons/modern-city.svg'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      selected: ticTacToe
    }
  }
  selectedItem = (event) => {
    this.setState({
      selected: event.target.name
    });
  }
  navIconMapper =() => {
    const icons = [settings, ticTacToe, coins, city, hooks];
    return icons.map((icon, id) =>
    <img key={id} name={icon} src={icon} className ={"icon-img"} alt={icon.id} onClick={this.selectedItem} />);
  }
  showPage =() => {
    if(this.state.selected === settings){
      return < settings />;
  //   }if(this.state.selected === ticTacToe){
  //    return < TicTacToeGame />;
  //   }if(this.state.selected === coins){
  //   return < Accounts />;
  //   }if(this.state.selected === city){
  //   return < Cities />;
  //   }if(this.state.selected === hooks){
  //   return < Hooks />;
    }
   }
  render (){

    return (
      <div className="App">
        <nav className ="topnav">
          {this.navIconMapper()}
        </nav>
        {/* //{this.showPage()} */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ReactLogo className="App-logo" alt="logo" />
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
