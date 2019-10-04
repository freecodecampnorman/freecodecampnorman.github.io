import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/defaultLayout';
import SEO from '../components/seo';
import LeaderboardTable from '../components/leaderboardtable';

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
            return fetch(
                `https://cors-anywhere.herokuapp.com/https://www.freecodecamp.org/api/users/get-public-profile?username=${username}`
            )
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
            resultList.sort((a, b) => parseInt(a.points) < parseInt(b.points));
            setUserDataList(resultList);
            setLoading(false);
        });
    }, []);

    return (
        <Layout>
            <SEO title="Leaderboard" />
            <h1>Leaderboard</h1>
            {loading ? <div>Loading...</div> : <LeaderboardTable userDataList={userDataList} />}
        </Layout>
    );
};

export default LeaderboardPage;
