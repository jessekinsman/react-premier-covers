// @flow
import React from 'react';

const Checkbox = (props: {item: Filter, terms: Terms, clickHandler: Function}) => {
  let active = false;
  for (let i = 0; i < props.terms.length; i += 1) {
    if (props.terms[i] === props.item.id.toString()) {
      active = true;
      break;
    }
  }
  let input;
  if (active) {
    input = <input type="checkbox" name="filter" value={props.item.id} id={props.item.id} checked onClick={props.clickHandler} />
  } else {
    input = <input type="checkbox" name="filter" value={props.item.id} id={props.item.id} onClick={props.clickHandler} />
  }
  return (
    <label className="label" htmlFor={props.item.id}>
      {input}
      {props.item.name}
    </label>
  );
}

export default Checkbox;
