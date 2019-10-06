/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Container from 'react-bootstrap/Container';

import './defaultLayout.scss';
import './indexLayout.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />

            {children}

            <footer>
                <Container>
                    <hr />© {new Date().getFullYear()} freeCodeCamp Norman, Built with{' '}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </Container>
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
