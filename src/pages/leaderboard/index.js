import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Nav from 'react-bootstrap/Nav';

import Layout from '../../components/defaultLayout';
import SEO from '../../components/seo';
import LeaderboardTable from '../../components/leaderboardtable';
import LoadingIndicator from '../../components/LoadingIndicator';

const BASE_URL = 'https://api.freecodecamp.org/internal/api/users/get-public-profile?username=';

const LeaderboardPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allFccUsersJson {
                edges {
                    node {
                        username
                    }
                }
            }
        }
    `);

    const [userDataList, setUserDataList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const usernames = data.allFccUsersJson.edges.map(item => item.node.username);

        const results = usernames.map(username => {
            return fetch(`https://cors-anywhere.herokuapp.com/${BASE_URL}${username}`)
                .then(res => res.json())
                .then(result => {
                    return {
                        username,
                        name: result.entities.user[username].name,
                        points: result.entities.user[username].points,
                    };
                });
        });

        Promise.all(results).then(resultList => {
            resultList.sort((a, b) => b.points - a.points);
            setUserDataList(resultList);
            setLoading(false);
        });
    }, []);

    return (
        <Layout>
            <SEO title="Leaderboard" />
            <h1>Leaderboard</h1>
            <Link to="/leaderboard/instructions" className="link-no-style">
                <Nav.Link as="span">Instructions for adding yourself</Nav.Link>
            </Link>
            {loading ? <LoadingIndicator /> : <LeaderboardTable userDataList={userDataList} />}
        </Layout>
    );
};

export default LeaderboardPage;
