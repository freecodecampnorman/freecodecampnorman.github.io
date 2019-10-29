import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Nav from 'react-bootstrap/Nav';

import Layout from '../../components/defaultLayout';
import SEO from '../../components/seo';

const LeaderboardInstructionsPage = () => {
    const [loading] = useState(true);

    return (
        <Layout>
            <SEO title="Leaderboard Instructions" />
            <h1>Leaderboard Instructions</h1>
            <ol>
                <li>
                    Make sure you have an account at <a href="https://www.freecodecamp.org">freeCodeCamp.org.</a>
                </li>
                <li>
                    Go to the{' '}
                    <a href="https://github.com/freecodecampnorman/freecodecampnorman.github.io">
                        freeCodeCamp Norman GitHub
                    </a>{' '}
                    and create a fork.
                </li>
                <li>In your fork, create a new branch.</li>
                <li>
                    In your new branch, edit the src/data/fccUsers.json file, and add your username to the bottom (copy
                    and paste someone else's entry and then change the username to yours).
                </li>
                <li>Commit your changes.</li>
                <li>Create a new Pull Request to merge your changes in your branch on your fork into the main repo.</li>
            </ol>
            
            <Link to="/leaderboard" className="link-no-style">
                <Nav.Link as="span">Go back to the Leaderboard</Nav.Link>
            </Link>
        </Layout>
    );
};

export default LeaderboardInstructionsPage;
