// @flow

import React from 'react';
import getRelative from './environment';
// import Spinner from './Spinner';

const imgPath = getRelative('/public/img/');

const Details = (props: { cover: Cover }) => {
  const parseHTML = html => ({ __html: html });
  return (
    <div id="#content-right">
      <div className="productContainer" data-desc={`${props.cover.img}`}>
        <div className="productContent">
          <div className="leftCol">
            <img alt={`${props.cover.title}`} src={`${imgPath}/covers/${props.cover.img}.jpg`} className="image" />
          </div>
          <div className="rightCol">
            <h2>{props.cover.title}</h2>
            <table dangerouslySetInnerHTML={parseHTML(props.cover.specsHTML)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
