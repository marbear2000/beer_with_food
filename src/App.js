import React, { Component } from 'react';
import Typed from 'react-typed';
import './App.css';
import BeerList from './components/BeerList/BeerList';
import Searchbar from './components/Searchbar/searchbar';
import Punk from './util/punk'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: []
    }
    this.searchPunk = this.searchPunk.bind(this);
  }

  searchPunk(query){
    Punk.search(query).then(beers => {
      this.setState({
        beers: beers
      });
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="banner">
          <div className="header">
          <h1>BEER with FOOD</h1>
          </div>

          <div id="typed-strings">
            <Typed
                strings={['Match your favourite BEER with FOOD',
                'Match your favourite FOOD with BEER']}
                typeSpeed={100}
                startDelay={600}
                backSpeed={100}
                backDelay={500}
            />
          </div>

          <Searchbar searchPunk={this.searchPunk}/>
          <BeerList beers={this.state.beers}/>
        </div>
      </div>
    );
  }
}

export default App;
