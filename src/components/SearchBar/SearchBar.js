import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {term: '', location: '', sortBy: 'best_match'};

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this); 
    this.handleSearch = this.handleSearch.bind(this); 

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption){

    if(sortByOption === this.state.sortBy){
      return 'active';
    }
    else{
      return '';
    }
  }

  handleSortyByChange(sortByOption){

    this.setState({sortBy: sortByOption});

  }

  handleTermChange(e){
    this.setState({term: e.target.value});
  }

  handleLocationChange(e){
    this.setState({location: e.target.value});
  }

  handleSearch(e){
    this.props.searchYelp(this.term, this.location, this.sortBy)
    e.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortyByChange.bind(this,sortByOptionValue)}>
          {sortByOption}</li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;