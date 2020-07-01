import React, { useState, useRef, useContext, useEffect } from 'react';
import { Alert, Container, Row, Col, H1, P, H3, H4, H5, H6, Section } from '@bootstrap-styled/v4';
import styled from 'styled-components';
import avatar from './../assets/img/avatar.svg';
import Header from '../components/Header';
import { skills } from '../constants/skills';
import { RefContext } from '../context/RefContext';


const SkillsPage = () => {
    const [mySkills, setSkills] = useState(skills);
    const FlexComponent = styled.div.attrs(props => ({
        className: 'd-flex flex-column justify-content-center align-items-center h-100'
    }))``;

    const SkillItem = styled.div.attrs(props => ({
        className: 'd-flex flex-column align-items-center border-top border-right border-bottom shadow-sm rounded p-3'
    }))`
        font-weight: 700;
        margin-top: 5px;
        margin-bottom: 5px;
        border-left: 5px solid red !important;
        width: 100%;
    `;

    const Header = styled(H3)`
        font-weight: 600;
        text-align: center;
    `;

    const Subheader = styled(H6)`
    text-align: left;
    font-weight: 600;
    `;

    const BadgeContainer = styled.div`
        display: flex;
        width: 100%;
        margin-top: 5px;
        justify-content: flex-start;
        align-items: start;
        flex-wrap: wrap;
    `;

    const Badge = styled.span.attrs(props => ({
        className: `bg-${props.bg ? props.bg : 'primary'} text-white rounded p-1`
    }))`
        white-space: nowrap;
        font-size: 0.7rem;
        margin-right: 2px;
        margin-top: 2px;
    `;

    const myRef = useRef();
    const { setSkillsRef } = useContext(RefContext);
    useEffect(() => setSkillsRef(myRef), [myRef])

    return (
        <div ref={myRef}>
             <Container>
            <Row>
                <Col>
                    <Header>Skills</Header>
                </Col>
            </Row>
            <div className="row row-cols-1 mt-3">
                {Object.keys(mySkills).map(prop => {
                    return (
                        <div key={prop} className="col mb-5">
                            <H5 className="font-weight-bold mb-4">{prop}</H5>
                            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row border shadow-sm rounded py-3">
                                {Object.keys(mySkills[prop]).map((prop2, index) => {
                                    return (
                                        <div key={index} className="col mb-3">
                                            <Row>
                                                <Col>
                                                    <Subheader>{prop2}</Subheader>
                                                </Col>
                                            </Row>
                                            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
                                                {mySkills[prop][prop2].map((child, index2) => {
                                                    return (
                                                        <div key={index2} className="col">
                                                            <SkillItem>{typeof child === 'string' ? child : (child.name && !child.sub && child.name || child.sub && (<React.Fragment>{child.name}<BadgeContainer>{child.sub.map((s, index3) => <Badge key={index3} bg={child.color}>{s}</Badge>)}</BadgeContainer></React.Fragment>))}</SkillItem>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

        </Container>
        </div>
       
    );
}

export default SkillsPage;
