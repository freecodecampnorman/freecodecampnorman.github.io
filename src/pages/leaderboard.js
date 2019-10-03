import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const LeaderboardPage = () => {
    const users = ['chris-tse', 'joematthews'];
    const [userDataList, setUserDataList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const results = users.map(username => {
            return fetch(
                `https://cors-anywhere.herokuapp.com/https://www.freecodecamp.org/api/users/get-public-profile?username=${username}`
            )
                .then(res => res.json())
                .then(result => {
                    return {
                        username,
                        points: result.entities.user[username].points,
                    };
                });
        });

        Promise.all(results).then(res => {
            setUserDataList(res);
            setLoading(false);
        });
    });

    return (
        <Layout>
            <SEO title="Leaderboard" />
            {loading ? <div>Loading...</div> : <div>{userDataList.map(item => JSON.stringify(item))}</div>}
        </Layout>
    );
};

export default LeaderboardPage;
