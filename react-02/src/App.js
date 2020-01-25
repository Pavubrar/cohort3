import React from 'react';
// import logo  from './logo.svg';
import './App.css';
import logoIcon from './icons/cog.svg'
import ticTacToeIcon from './icons/tic-tac-toe.svg'
import hooksIcon from './icons/meat-hook.svg'
import coinsIcon from './icons/money-stack.svg'
import cityIcon from './icons/modern-city.svg'
import themeIcon from './icons/theam.svg'
import stackIcon from './icons/stack.svg'
import Game from './components/tictactoe/Game';
import Starter from './components/starter/Starter';
import AccountApp from './components/accounts/AccountApp';
import Cities from './components/cities/CitiesApp';
import Hooks from './components/linkedList/LinkListComp';
// import Theme from './components/linkedList/LinkListComp';
 import Stack from './components/stack-queue/lifo-fifoApp';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: Starter
    }
  }
  selectedItem = (event) => {
    this.setState({
      selected: event.target.name
    });
  }
  navIconMapper = () => {
    const icons = [logoIcon, ticTacToeIcon, coinsIcon, cityIcon, hooksIcon, themeIcon, stackIcon];
    return icons.map((icon, id) =>
      <img key={id} name={icon} src={icon} className={"icon-img"} alt={icon.id} onClick={this.selectedItem} />);
  }
  showPage = () => {
    if (this.state.selected === logoIcon) {
      return <Starter />;
    } if (this.state.selected === ticTacToeIcon) {
      return <Game />;
    } if(this.state.selected === coinsIcon){
     return <AccountApp />;
       }
       if(this.state.selected === cityIcon){
     return < Cities />;
      }
      if(this.state.selected === hooksIcon){
      return < Hooks />;
      }
      // if(this.state.selected === themeIcon){
      //   return < Theme />;
      //   }
        if(this.state.selected === stackIcon){
          return < Stack />;
          }
  }

  render() {

    return (
      <div className="App">
        <nav className="topnav">
          {this.navIconMapper()}
        </nav>
        {this.showPage()}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ReactLogo className="App-logo" alt="logo" /> */}
          {/* <p>
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
        </header> */} 
      </div>
    );
  }
}

export default App;
