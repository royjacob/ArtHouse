import React, { Component } from 'react';
import {Gallery} from "./Gallery";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "Library" : [
        {"ImgUrl":"one", "Name":"won"},
        {"ImgUrl":"two", "Name":"too"},
        {"ImgUrl":"three", "Name":"free"},
        {"ImgUrl":"four", "Name":"four"},
        {"ImgUrl":"five", "Name":"phaive"},
        {"ImgUrl":"six", "Name":"siiix"}
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
            <div className="pure-menu pure-menu-horizontal">
                <a className="pure-menu-heading" href="#">Katherine Jacob Wildlife Artist</a>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Original Art</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Prints</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Cards</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Gallery</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Commissions</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>
                </ul>
            </div>
        </div>
        <Gallery library = {this.state.Library}/>
      </div>
    );
  }
}

export default App;
