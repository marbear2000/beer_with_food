import React from 'react';
import './beers.css';


class Beers extends React.Component {

  render() {
    const { beer } = this.props;
      return (
        <div>
          <div className="image_url">
            <img src={beer.image_url} alt="beer bottle" />
          </div>

          <div className="container beer-details">
            <h2 className="name">{beer.name}</h2>
            <h4 className="tagline">Beer Type :: {beer.tagline}</h4>
            <p className="description">{beer.description}</p>

            <h3 className="food-pairing">The beer goes best with ::</h3>
              <ul className="food-pairing-list">
                <li>{beer.food_pairing}.</li>
              </ul>

            <h3 className="brewers-tips">Top Tips from the best brewers ::</h3>
            <p>{beer.brewers_tips}</p>
          </div>
        </div>
    )
  }
}


export default Beers;
