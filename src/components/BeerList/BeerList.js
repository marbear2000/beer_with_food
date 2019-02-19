import React from 'react';
import './BeerList.css';
import Beers from '../Beers/beers'

class BeerList extends React.Component {
  render() {
    return (
      <div className='beer-details'>
      {
        this.props.beers.map(beer => {
          return <Beers key={beer.id} beer={beer} />;
        })
      }
      </div>
    );
  }
}

export default BeerList;
