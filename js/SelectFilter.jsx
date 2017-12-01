// @flow
import React, { Component } from 'react';

class SelectFilter extends Component {
  state = {
    selected: 0
  }
 props: {
   item: Filter,
   terms: Terms,
   clickHandler: Function
 }
 isSelected = (terms, id) => (
    terms.some((ele) => ele === id.toString())
  )
  render () {
    const selectItems = this.props.item.children.map((selectItem) => {
      if (this.isSelected(this.props.terms, selectItem.id)) { this.state.selected = selectItem.id}
      return <option key={selectItem.id} value={selectItem.id}>{selectItem.name}</option>;
    });
    return (
      <div className="col2">
        <span className="title">
          {this.props.item.name}
        </span>
        <select name="filter" value={this.state.selected} onChange={this.props.clickHandler}>
          <option value="0">Any</option>
          {selectItems}
        </select>
      </div>
    );
  }
}
export default SelectFilter;
