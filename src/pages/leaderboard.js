import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import axios from 'axios';

class LeaderboardPage extends React.Component {
    componentDidMount() {
        this.getUserDataList();
    }

    getUserDataList = () => {
        const users = ['chris-tse', 'joematthews'];

        const results = users.map(username => {
            return axios
                .get(`https://www.freecodecamp.org/api/users/get-public-profile?username=${username}`)
                .then(result => {
                    return {
                        username,
                        points: result.data.entities.user[username].points,
                    };
                });
        });

        Promise.all(results).then(res => console.log(res));
    };

    render() {
        return (
            <Layout>
                <SEO title="Leaderboard" />
            </Layout>
        );
    }
}

export default LeaderboardPage;
