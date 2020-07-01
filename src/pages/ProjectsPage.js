import React, { useState, useRef, useEffect, useContext } from 'react';
import { Alert, Container, Row, Col, H1, H3, P } from '@bootstrap-styled/v4';
import styled from 'styled-components';
import avatar from './../assets/img/avatar.svg';
import Header from '../components/Header';
import { experiences } from '../constants/experiences';
import { projects } from '../constants/works';
import { RefContext } from '../context/RefContext';


const ProjectsPage = ({ forwardedRef }) => {
    const FlexComponent = styled.div.attrs(props => ({
        className: 'd-flex flex-column justify-content-center align-items-center h-100'
    }))`
`;

    const Card = styled.div.attrs(props => ({
        className: 'd-flex flex-column align-items-center border-left border-right border-bottom shadow-sm rounded p-3'
    }))`
        margin-top: 5px;
        margin-bottom: 20px;
        border-top: 5px solid red !important;
        width: 100%;
    `;

    const CardHeader = styled.div.attrs(props => ({
        className: 'd-flex justify-content-between w-100'
    }))`
       font-weight: 700;`;

    const ListItem = styled.li`
        font-size: 0.8rem;
    font-weight: 400;
    `;

    const SkillsContainer = styled.div`
        display: flex;
        width: 100%;
        margin-top: 10px;
    `;

    
    const SkillBadge = styled.span.attrs(props => ({
        className: `bg-${props.bg ? props.bg : 'primary'} text-white rounded p-1`
    }))`
    white-space: nowrap;
    font-size: 0.7rem;
    margin-right: 3px;
    margin-top: 2px;
    font-weight: 600;
`;

    const myRef = useRef();

    const [myProjects, setMyProjects] = useState(projects);
    const { setProjectRef } = useContext(RefContext);
    useEffect(() => setProjectRef(myRef), [myRef])
   

    return (
        <div ref={myRef}>
<Container >
            <Row className="mb-3">
                <Col>
                    <H3 className="text-center">Works</H3>
                </Col>
            </Row>

            <div className="row row-cols-1">
                <div className="col">
                    {myProjects.map((e, index) => {

                        return (
                            <Card key={index}>
                                <CardHeader>
                                    <span>
                                        {e.project}
                                    </span>
                                    <small className="text-muted">
                                        {e.sub}
                                    </small>
                                </CardHeader>
                                <ul className="pl-3 w-100">
                                    {e.items.map(i => <ListItem key={i} className="text-capitalized">{i}</ListItem>)}
                                </ul>

                                <SkillsContainer>
                                    {e.skills.map((c, index2) => <SkillBadge key={index2}>{c}</SkillBadge>)}
                                </SkillsContainer>
                                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mt-3'>
                                    {e.images.map((r, index3) => 
                                        <div key={index3} className='col mt-3 d-flex justify-content-center'>
                                                <img src={r} height={200} />
                                        </div>
                                        )}
                                </div>
                                
                               
                            </Card>
                        )
                    })}

                </div>
            </div>
        </Container>
        </div>
        
    );
}

export default ProjectsPage;
