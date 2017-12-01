// @flow
import React, { Component } from 'react';

class SelectFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.getActive(props)
    }
  }
 getActive = (props) => {
   let active = 0;
   for (let i = 0; i < props.item.children.length; i += 1){
       if (this.isSelected(props.terms, props.item.children[i].id)) {
         active= props.item.children[i].id;
       }
   }
   return active;
 }
 isSelected = (terms, id) => (
    terms.some((ele) => ele === id.toString())
  )
  props: {
    item: Filter,
    terms: Terms,
    clickHandler: Function
  }
  render () {
    const selectItems = this.props.item.children.map(selectItem => (
      <option key={selectItem.id} value={selectItem.id}>{selectItem.name}</option>
    ));
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
