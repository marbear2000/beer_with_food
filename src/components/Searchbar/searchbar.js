import React from 'react';
import './searchbar.css';


class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    query: ''
    }
    this.handleQuery = this.handleQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleQuery(event){
    this.setState({
      query: event.target.value
    })
  }

  handleSearch(event) {
    this.props.searchPunk(this.state.query);
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <div className="searchbar">
          <input type="text" placeholder="Input Your Favourite Food" onChange={this.handleQuery} />
        </div>
        <div className="searchbar-submit">
          <a href="www.#.com" onClick={this.handleSearch}>FIND!</a>
        </div>
      </div>
    )
  }
}

export default Searchbar;
