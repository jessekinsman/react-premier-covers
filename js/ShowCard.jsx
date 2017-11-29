// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components tend to give flow errors. One way to solve is to give the : any definition
// Any type just tells flow not to check type on that object
// The other option is // $FlowFixMe forces flow to ignore the next line
// $FlowFixMe
const Wrapper = styled(Link)`
`;
const Image = styled.img`
`;
const Productitem = styled.div`
  background: #fff;
`;
const Gradeimg = styled.img`
  margin-left: 4px;
`;

const ShowCard = (props: Cover) => (
      <Productitem className="productItem">
        <Wrapper to={`/Details/${props.dDocName}`} className="thumbWrap">
          <Image
            alt={`${props.title}`}
            src={`/public/img/covers/${props.img}.jpg`}
            className="productImage"
          />
        </Wrapper>
        <div className="productTitle">
          <a className="productLink">{props.title}</a>
        </div>
        <div className="gradeIcons">
          {props.grades.map(item => (
            <Gradeimg
              src={`/public/img/${item.image}.png`}
              alt={`${item.name}`}
              key={`${item.name}`}
              className="gradeIcon"
            />
          ))}
        </div>
      </Productitem>
)

export default ShowCard;
