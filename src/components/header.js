import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.scss';

const isMatch = ({ isCurrent }) => {
    return isCurrent ? { className: 'active' } : { className: 'inactive' };
};

const Header = ({ siteTitle }) => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Link className="link-no-style" to="/">
                <Navbar.Brand>{siteTitle}</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/page-2/" className="link-no-style" getProps={isMatch}>
                        <Nav.Link as="span">Page 2</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
