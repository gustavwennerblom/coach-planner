/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { CssBaseline, Container } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

import TopMenuBar from './TopMenuBar';
// import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <TopMenuBar />
      <Container>
        <main>{children}</main>
        <footer>
          © Gustav Wennerblom {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
