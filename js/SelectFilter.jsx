// @flow
import React from 'react';

const SelectFilter = (props: {item: Filter, terms: Terms, clickHandler: Function}) => {
  const isSelected = (terms, id) => (
    terms.some((ele) => ele === id.toString())
  )
  const selectItems = props.item.children.map((selectItem) => {
    if (isSelected(props.terms, selectItem.id)) {
      return <option key={selectItem.id} value={selectItem.id} selected >{selectItem.name}</option>;
    }
    return <option key={selectItem.id} value={selectItem.id}>{selectItem.name}</option>;
  });
  return (
    <div className="col2">
      <span className="title">
        {props.item.name}
      </span>
      <select name="filter" onChange={props.clickHandler}>
        <option value="0">Any</option>
        {selectItems}
      </select>
    </div>
  );
}

export default SelectFilter;
