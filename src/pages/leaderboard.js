import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LeaderboardTable from '../components/leaderboardtable';

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
