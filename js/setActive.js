const setActive = (item, term, path) => {
  const newMenu = JSON.parse(JSON.stringify(item));
  const checkID = (itemO, termO) => {
    if (Object.prototype.hasOwnProperty.call(itemO, 'id')) {
      if (termO === itemO.id) {
        return true;
      }
    }
    return false;
  };
  const checkForChildren = item1 => {
    if (Object.prototype.hasOwnProperty.call(item1, 'children')) {
      if (item1.children.length > 0 && item1.children !== '') {
        return true;
      }
    }
    return false;
  };
  const check = (item3, term3) => {
    const returnItem = item3;
    let childCheck = false;
    if (!checkID(item3, term3)) {
      if (checkForChildren(item3)) {
        for (let i = 0; i < item3.children.length; i += 1) {
          childCheck = check(item3.children[i], term3);
          if (childCheck === true) {
            returnItem.children[i].selected = 'true';
            returnItem.selected = true;
            break;
          }
        }
        return childCheck;
      }
      return false;
    }
    returnItem.selected = true;
    return true;
  };

  for (let j = 0; j < newMenu.length; j += 1) {
      if (newMenu[j].path === path) {
        if (term.length > 0) {
        if (check(newMenu[j], parseInt(term[0], 10))) {
          newMenu[j].selected = true;
          break;
        }
      }
      newMenu[j].selected = true;
    }
  }

  return newMenu;
};
export default setActive;
