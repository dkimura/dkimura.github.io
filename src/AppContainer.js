import React, { PropTypes } from 'react';

import Container from './components/Container';
import DefaultHeadMeta from './components/DefaultHeadMeta';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './index.global.css';
import './highlight.global.css';

const AppContainer = ({ children }) =>
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Content>
      { children }
    </Content>
    <Footer />
  </Container>
;

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
