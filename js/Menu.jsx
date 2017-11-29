// @flow
import React, { Component } from 'react';
import ChildMenu from './ChildMenu';

class Menu extends Component {
  state = {
    selected: 'covers'
  };
  props: {
    items: items,
    term: term
  };
  render() {
    return (
      <div className="accordion">
        <ul id="sub-nav-cse">
          {this.props.items.map(item => {
            // need to only have one return statement and put the rest into const 
            if (item.selected) {
              return (
                <li className="active top" key={item.name}>
                  <a className={`top-level ${item.name}-nav`} href={`/${item.name}`}>
                    <span className="icn" />{item.name}
                  </a>
                  <ChildMenu items={item.children} term={this.props.term} key={item.name}/>
                </li>
              );
            }
            return (
              <li className="top" key={item.name}>
                <a className={`top-level ${item.name}-nav`} href={`/${item.name}`}>
                  <span className="icn" /> {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Menu;
