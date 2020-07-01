import React, { useState, useRef, useEffect, useContext } from 'react';
import { Alert, Container, Row, Col, H1, P } from '@bootstrap-styled/v4';
import styled from 'styled-components';
import avatar from './../assets/img/0.jpg';
import Header from '../components/Header';
import { RefContext } from '../context/RefContext';


const IndexPage = () => {
  const FlexComponent = styled.div.attrs(props => ({
    className: 'd-flex flex-column justify-content-center align-items-center h-100'
  }))`
`;

  const EmailMe = styled.span`
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    -webkit-user-select: none; /* Chrome/Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+ */

/* Rules below not implemented in browsers yet */
-o-user-select: none;
user-select: none;
  `;

const myRef = useRef();
const { setHomeRef } = useContext(RefContext);
useEffect(() => setHomeRef(myRef), [myRef]);

  return (
    <div className='h-100'>
      <Container className='h-100 d-flex flex-column'>
        <Header />
        <Row style={{ flex: .8 }}>
          <Col>
            <FlexComponent>
              <img className="rounded m-2" src={avatar} height={150} />
              <H1>Darrell Carl Rizo Jose</H1>
              <P className='lead mb-0'>Web Developer</P>
            </FlexComponent>
          </Col>
        </Row>
        <EmailMe onClick={() => window.location = "mailto:drizojose0396@gmail.com"}>&#9993; Contact Me</EmailMe>
      </Container>
    </div>

  );
}

export default IndexPage;
