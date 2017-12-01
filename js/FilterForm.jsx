// @flow
import React from 'react';
import Checkbox from './Checkbox';
import SelectFilter from './SelectFilter';



const FilterForm = (props: {items: MenuCategory, terms: Terms}) => {
  let description = "";
  if (props.items && props.items.description) {
    description = props.items.description;
  }
  const addSlash = (path) => {
    if (!path.endsWith("/")) {
      return `${path}/`;
    }
    return path;
  }
  const handleClick = (event) => {
    let path = addSlash(props.location.pathname);
    if (event.target.checked) {
      path += event.target.value;
      props.history.push(path);
    } else {
      path = props.location.pathname.replace(`/${event.target.id}`, "");
      props.history.push(path);
    }
  }
  const handleChange = (event) => {
    let path = addSlash(props.location.pathname);
    for (let i = 0; i < event.target.length; i += 1) {
      if (path.indexOf(event.target.options[i].value) > -1) {
        path = path.replace(`/${event.target.options[i].value}`, "");
        break;
      }
    }
    path += event.target.value;
    props.history.push(path);
  }
  const checkboxes = props.items.children.filter(item => !item.children.length);
  const selectboxes = props.items.children.filter(item => item.children.length);
  return (
    <form name="filterItems" className="sort">
      <div className="col1">
        <span className="title">
          {description}
        </span>
        {checkboxes.map(item => (
          <Checkbox item={item} key={item.id} terms={props.terms} clickHandler={handleClick} />
        ))}
      </div>
      {selectboxes.map(item => (
          <SelectFilter item={item} key={item.name} terms={props.terms} clickHandler={handleChange} />
      ))}
    </form>
  )
}


export default FilterForm;
