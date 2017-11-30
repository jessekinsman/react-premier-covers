// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';
import Menu from './Menu';
import FilterForm from './FilterForm';
import { getFilters } from './setActive';

// {...object} is a spread operator to pass all the items to a top level so it is now props.title instead of show.props.title
// We could pass show={show} instead of spread operator or we could list them all out title={show.title}

class Search extends Component {
  state = {
    searchTerm: '',
    terms: []
  };
  props: {
    covers: Array<Cover>,
    terms: Array<Number>,
    menudata: Array<TopMenu>
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        {/* In order for Header to render showSearch, it needs to be able to change the state of Search. So we pass it functions as well as the state object so it can render showSearch */}
        <Header showSearch searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} />
        <div id="content-left">
          <h2>Products for Students</h2>
          <Menu items={this.props.menudata} term={this.props.terms} />
        </div>
        <div id="content-right">
          <div className="productsHeader">
            <div className="optionsContainer">
              <FilterForm terms={this.props.terms} items={getFilters(this.props.menudata, "/covers", "options")} {...this.props} />
            </div>
          </div>
          <div className="courseListContainer">
            {this.props.covers
              .filter(
                cover =>
                  `${cover.title} ${cover.description} ${cover.specsHTML}`
                    .toUpperCase()
                    .indexOf(this.state.searchTerm.toUpperCase()) > -1
              )
              .map(cover => <ShowCard key={cover.dDocName} {...cover} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
