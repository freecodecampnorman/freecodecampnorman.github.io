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
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
            <Link className="link-no-style" to="/">
                <Navbar.Brand>{siteTitle}</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/" className="link-no-style" getProps={isMatch}>
                        <Nav.Link as="span">Home</Nav.Link>
                    </Link>
                    <Link to="/slack" className="link-no-style" getProps={isMatch}>
                        <Nav.Link as="span">Slack</Nav.Link>
                    </Link>
                    <Link to="/blog" className="link-no-style" getProps={isMatch}>
                        <Nav.Link as="span">Blog</Nav.Link>
                    </Link>
                    <Link to="/leaderboard" className="link-no-style" getProps={isMatch}>
                        <Nav.Link as="span">Leaderboard</Nav.Link>
                    </Link>
                    <Link to="/contact" className="link-no-style" getProps={isMatch}>
                        <Nav.Link as="span">Contact Us</Nav.Link>
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
