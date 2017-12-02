// @flow
// Components must be uppercase for the parser to parse them. If they are lower case, the parser assumes you want a literal
// Details.jsx not details.jsx

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Details from './Details';
import Search from './Search';
import preload from '../data.json';
import menuData from '../menu.json';
import { setActive, termsToArray } from './setActive';

const fourOhFour = () => <h1>404 Error</h1>;

const App = () => (
  <BrowserRouter basename="/react-premier-covers">
    <div className="app">
      <Switch>
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const selectedCover = preload.covers.find(cover => props.match.params.id === cover.dDocName);
            return <Details cover={selectedCover} {...props} />;
          }}
        />
        <Route
          // Need to add wildcard so more than one filter can be selected
          // path="/search/:term1/*
          // in filterCovers filter need to do a loop through terms
          path="/search/:term1/:term2/:term3*/:term4*/:term5*"
          component={(props: { match: Match }) => {
            const terms = termsToArray(props.match.params, 5, "term");
            const filterdCovers = preload.covers.filter(
              (cover) => {
                  for (let i = 0; i< terms.length; i += 1) {
                    if (cover.terms.indexOf(terms[i]) === -1) {
                      return false;
                    }
                  }
                  return true;
              }
            );
            return (
              <Search covers={filterdCovers} terms={terms} menudata={setActive(menuData, terms, "/covers")} {...props} />
            );
          }}
        />
        <Route
          path="/search/:term"
          component={(props: { match: Match }) => {
            const filterdCovers = preload.covers.filter(cover => cover.terms.indexOf(props.match.params.term) !== -1);
            // console.log("filter length " + filterdCovers.length);
            return <Search covers={filterdCovers} terms={[props.match.params.term]} menudata={setActive(menuData, [props.match.params.term], "/covers")} {...props} />;
          }}
        />
        <Route path="/" component={props => <Search covers={preload.covers} menudata={setActive(menuData, [], "/covers")} terms={[]} {...props} />} />
        <Route component={fourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
