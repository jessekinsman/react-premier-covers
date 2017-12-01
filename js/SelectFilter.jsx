// @flow
import React, { Component } from 'react';

class SelectFilter extends Component {
  state = {
    selected: 0
  }
  /* componentWillReceiveProps(props) {
    this.setActive(props);
  } */
 props: {
   item: Filter,
   terms: Terms,
   selected: Number,
   clickHandler: Function
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
  render () {
    const selectItems = this.props.item.children.map(selectItem => {
      return <option key={selectItem.id} value={selectItem.id}>{selectItem.name}</option>
    });
    return (
      <div className="col2">
        <span className="title">
          {this.props.item.name}
        </span>
        <select name="filter" value={this.getActive(this.props)} onChange={this.props.clickHandler}>
          <option value="0">Any</option>
          {selectItems}
        </select>
      </div>
    );
  }
}
export default SelectFilter;
