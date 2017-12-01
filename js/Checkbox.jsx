// @flow
import React from 'react';

// Think I should probably change this to a state component

const Checkbox = (props: {item: Filter, terms: Terms, clickHandler: Function}) => {
  let active = false;
  for (let i = 0; i < props.terms.length; i += 1) {
    if (props.terms[i] === props.item.id.toString()) {
      active = true;
      break;
    }
  }
  return (
    <label className="label" htmlFor={props.item.id}>
      <input type="checkbox" key={props.item.id} name="filter" value={props.item.id} id={props.item.id} checked={active} onChange={props.clickHandler} onClick={props.clickHandler} />
      {props.item.name}
    </label>
  );
}

export default Checkbox;
