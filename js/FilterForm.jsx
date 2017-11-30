// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import Checkbox from './Checkbox';



const FilterForm = (props: {items: MenuCategory, terms: Terms}) => {
  let description = "";
  let filters;
  if (props.items && props.items.description) {
    description = props.items.description;
  }
  if (props.items.children) {
    filters = props.items.children;
  } else {
    filters = [];
  }
  const handleClick = (event) => {
    console.log("click fired");
    if (event.target.checked) {
      props.history.push(props.location.pathname + "/" + event.target.id);
    } else {
      let path = props.location.pathname.replace("/" + event.target.id, "");
      props.history.push(path);
    }
  }
  return (
    <form name="filterItems" className="sort">
      <div className="col1">
        <span className="title">
          {description}
        </span>
        {filters.map((item)=>{
          /* if(item.children.length) {
            return (
              // select component
            );
          } */
          return (
            <Checkbox item={item} terms={props.terms} clickHandler={handleClick} />
          );
        })}
      </div>
    </form>
  )
}

export default FilterForm;
