// @flow

import React from 'react';
import { Link } from 'react-router-dom';

// In the arrow functions if you are just outputing jsx, you don't use curly brackets. You use paranthesis instead
// To make it a component, you use curly brakcets

// To share data and make child and parent components interact, you always have parent components passing functions down to the child, like below

const Header = (props: { showSearch?: Boolean, handleSearchTermChange?: Function, searchTerm?: string }) => {
  // Below is how you handle conditionals for output. Define a var and assign output then place the var in the return statement
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">
          sVideo
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

// Above we specified that showSearch property is option by putting a '?' before the colorn (props: {showSearch?: Boolean})
// For all optional params, we have to define a default prop, which is what we are doing below
Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  searchTerm: ''
};

export default Header;
