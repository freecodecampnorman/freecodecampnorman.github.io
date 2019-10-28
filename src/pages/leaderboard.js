import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/defaultLayout';
import SEO from '../components/seo';
import LeaderboardTable from '../components/leaderboardtable';
import LoadingIndicator from '../components/LoadingIndicator';

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
            <h2>Instructions</h2>
            <ul>
                <li>Make sure you have an account at <a href="https://www.freecodecamp.org">Freecodecamp.org</a></li>
                <li>Go to the <a href="https://github.com/freecodecampnorman/freecodecampnorman.github.io">Freecodecamp Norman github</a> and create a fork.</li>
                <li>In your fork, create a new branch</li>
                <li>In your new branch, edit the src/data/fccUsers.json file, and add your user name to the bottom (copy and paste someone else's entry and then change the user name to yours)</li>
                <li>Commit your changes</li>
                <li>Create a new Pull Request to merge your changes in your branch on your fork into the main repo</li>
            </ul>
            {loading ? <LoadingIndicator /> : <LeaderboardTable userDataList={userDataList} />}
        </Layout>
    );
};

export default LeaderboardPage;
