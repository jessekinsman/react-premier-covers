import React from 'react';
import { shallow } from 'enzyme';
import preload from '../data.json';
import Search from '../js/Search';
import Header from '../js/Header';
import ShowCard from '../js/ShowCard';
import menuData from '../menu.json';
import setActive from '../js/setActive';

test('Search renders correctly', () => {
    const component = shallow(<Search covers={preload.covers} menudata={setActive(menuData, [], "/covers")} terms={[]} />);
    expect(component).toMatchSnapshot();
})


// if you put a x in front of test 'xtest()', it skips the test
// below test checks if the search is getting the same number of items
test('Search should render the correct number of covers', () => {
    const component = shallow(<Search covers={preload.covers} menudata={setActive(menuData, [], "/covers")} terms={[]} />);
    expect(component.find(ShowCard).length).toEqual(preload.covers.length);
})

test('Search should render the correct number of covers for term: 31', () => {
  const filterdCovers = preload.covers.filter(cover => cover.terms.indexOf("31") !== -1);
    //console.log("filter length " + filterdCovers.length);
    const component = shallow(<Search covers={filterdCovers} menudata={setActive(menuData, [], "/covers")} terms={[31]} />);
    expect(component.find(ShowCard).length).toEqual(filterdCovers.length);
})

test('Search should render the correct number of covers for term: 125', () => {
  const filterdCovers = preload.covers.filter(cover => cover.terms.indexOf("125") !== -1);
    //console.log("filter length " + filterdCovers.length);
    const component = shallow(<Search covers={filterdCovers} menudata={setActive(menuData, [], "/covers")} terms={[125]} />);
    expect(component.find(ShowCard).length).toEqual(filterdCovers.length);
})

// in the below test we pass an event to the search component and then we build some logic (line 29: showCount) to test that the search component is rendering the correct number of shows

test('Search renders the correct amount of covers based on the search term', () => {
    const searchWord = 'Polyice';
    const component = shallow(<Search covers={preload.covers} menudata={setActive(menuData, [], "/covers")} terms={[]} />);
    // .find() will find either react components or css selectors
    // .simulate() will simulate dom events. We pass it the event target as an object event.target.value
    // .dive() used when you need to select an element in a componenet you just found
    component.find(Header).dive().find('input').simulate('change', {target: {value: searchWord}});

    // Normally you would not duplicate logic like below. We would separate it into a separate module that could be used from both the test and the component
    const showCount = preload.covers.filter(cover =>
                                `${cover.title} ${cover.description} ${cover.specsHTML}`.toUpperCase().indexOf(searchWord.toUpperCase()) > -1).length;
    expect(component.find(ShowCard).length).toEqual(showCount);

})
