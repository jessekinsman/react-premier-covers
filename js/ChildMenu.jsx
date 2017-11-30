// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GrandChild from './GrandChild';
// import checkActive from './checkActive';

class ChildMenu extends Component {
  state = {
    visible: false
  };
  props: {
    items: items
  };
  handleClick = (event: SyntheticEvent<HTMLAnchorElement>) => {
    if (this.state.visible === false) {
      this.setState({ visible: true });
      event.currentTarget.parentNode.setAttribute('class', 'active category');
    } else {
      this.setState({ visible: false });
      event.currentTarget.parentNode.setAttribute('class', 'inactive category');
    }
    event.preventDefault();
  };
  render() {
    return (
      <ul>
        <li><Link to="/search">View All</Link></li>
        {this.props.items.map(item => {
          let classN = 'inactive category';
          if (item.selected) {
            classN = 'active category';
          }
          if (item.description.toLowerCase() !== "options") {
            return (
              <li className={`${classN}`} key={item.description}>
                <a onClick={this.handleClick} role="link" tabIndex="-1">{item.description}</a>
                <GrandChild items={item.children} key={item.id} />
              </li>
            )
          }
          return null;
        })}
      </ul>
    );
  }
}

export default ChildMenu;
