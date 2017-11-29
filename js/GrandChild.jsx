// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const GrandChild = (props: { items: MenuGrandChild }) => {
  const renderMenu = menuItems => {
    const menu = menuItems.map(mItem => {
      let subMenu;
      let classN = 'inactive';
      if (Object.prototype.hasOwnProperty.call(mItem, 'children') && mItem.children.length > 0) {
        subMenu = renderMenu(mItem.children);
      }
      if (mItem.selected) {
        classN = 'active';
      }
      return (
        <li className={classN} key={mItem.id}>
          <Link to={`/search/${mItem.id}`}>{mItem.name}</Link>
          {subMenu}
        </li>
      );
    });
    return (
      <ul>
        {menu}
      </ul>
    );
  };
  return renderMenu(props.items);
};

export default GrandChild;
