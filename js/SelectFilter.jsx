// @flow
import React from 'react';

const SelectFilter = (props: {item: Filter, terms: Terms,clickHandler: Function}) => {
  const isSelected = (terms, id) => (
     terms.some((ele) => ele === id.toString())
   )
 const getActive = (item, terms) => {
   let active = 0;
   for (let i = 0; i < item.children.length; i += 1){
       if (isSelected(terms,item.children[i].id)) {
         active = item.children[i].id;
       }
   }
   return active;
 }
  const selectItems = props.item.children.map(selectItem => (
    <option key={selectItem.id} value={selectItem.id}>{selectItem.name}</option>
  ));
    return (
      <div className="col2">
        <span className="title">
          {props.item.name}
        </span>
        <select name="filter" value={getActive(props.item, props.terms)} onChange={props.clickHandler}>
          <option value="0">Any</option>
          {selectItems}
        </select>
      </div>
    );
}
export default SelectFilter;
