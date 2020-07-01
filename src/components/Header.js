import React, { useContext } from 'react';
import { Alert, Container, Row, Col, H1, P } from '@bootstrap-styled/v4';
import styled from 'styled-components';
import { RefContext } from '../context/RefContext';


const Header = ({ scrollTo }) => {
    const Item = styled.span`
        font-size: 0.9rem;
        font-family: inherit;
        padding-bottom: 5px;
        border-bottom: ${props => props.active ? '3px solid red' : 'none'};
        font-weight: ${props => props.active ? 600 : 0 };
        cursor: pointer;
        -webkit-user-select: none; /* Chrome/Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */

        /* Rules below not implemented in browsers yet */
        -o-user-select: none;
        user-select: none;
  `;
    const { projectRef, skillsRef, experienceRef, homeRef } = useContext(RefContext); 
    
    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }  
    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col className='col-12 col-sm-12 col-md-8 col-lg-8  d-flex justify-content-between py-3'>
                    <Item>HOME</Item>
                    <Item onClick={() => scrollToRef(experienceRef)}>WORK EXPERIENCE</Item>
                    <Item onClick={() => scrollToRef(skillsRef)}>SKILLS</Item>
                    <Item onClick={() => scrollToRef(projectRef)}>WORKS</Item>
                </Col>
            </Row>
        </Container>
    );

}

export default Header;