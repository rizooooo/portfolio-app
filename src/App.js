import React, { useRef } from 'react';
import { Alert, Container, Row, Col, H1, P } from '@bootstrap-styled/v4';
import styled from 'styled-components';
import Header from './components/Header';
import avatar from './assets/img/avatar.svg';
import IndexPage from './pages/IndexPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import RefContextProvider from './context/RefContext';



const App = () => {
  return (
    <RefContextProvider>
      <React.Fragment>
        <IndexPage />
        <SkillsPage />
        <ExperiencePage />
        <ProjectsPage />
      </React.Fragment>
    </RefContextProvider>

  );
}

export default App;
