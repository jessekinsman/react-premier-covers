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
import setActive from './setActive';

const fourOhFour = () => <h1>404 Error</h1>;

const App = () => (
  <BrowserRouter>
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
          path="/search/:term1/:term2"
          component={(props: { match: Match }) => {
            const filterdCovers = preload.covers.filter(
              cover =>
                cover.terms.indexOf(props.match.params.term1) !== -1 &&
                cover.terms.indexOf(props.match.params.term2) !== -1
            );
            return (
              <Search covers={filterdCovers} terms={[props.match.params.term1, props.match.params.term2]} menudata={setActive(menuData, [props.match.params.term1, props.match.params.term2], "/covers")} {...props} />
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
        <Route path="/search" component={props => <Search covers={preload.covers} menudata={setActive(menuData, [], "/covers")} terms={[]} {...props} />} />
        <Route component={fourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
