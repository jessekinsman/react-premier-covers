const checkActive = (item, term) => {
  const checkID = (itemO, termO) => {
    if (Object.prototype.hasOwnProperty.call(itemO, 'id')) {
      //console.log("termO " + termO  + " " + typeof termO);
      //console.log("itemO " + itemO.id + " " + typeof itemO.id);
      if (termO === itemO.id) {
        console.log('match');
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
    let childCheck = false;
    if (!checkID(item3, term3)) {
      if (checkForChildren(item3)) {
        for (var i = 0; i < item3.children.length; i++) {
          childCheck = check(item3.children[i], term3);
          console.log(childCheck + ' item name: ' + item3.children[i].name);
          if (childCheck == true) {
            i = item3.length + 1;
          }
        }
        return childCheck;
      }
      return false;
    }
    console.log(' returning from check true ' + item3.name);
    return true;
  };
  if (term.length > 0) {
    if (check(item, parseInt(term[0]))) {
      return true;
    }
  }
  return false;
};
export default checkActive;
