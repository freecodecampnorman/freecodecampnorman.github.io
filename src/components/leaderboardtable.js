import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import LeaderboardRow from './leaderboardrow';

const LeaderboardTable = ({ userDataList }) => (
    <Table>
        <thead>
            <tr>
                <td>
                    <strong>Name</strong>
                </td>
                <td>
                    <strong>Username</strong>
                </td>
                <td>
                    <strong>Points</strong>
                </td>
            </tr>
        </thead>
        <tbody>
            {userDataList.map(userData => (
                <LeaderboardRow key={`${userData.username}-row`} userData={userData} />
            ))}
        </tbody>
    </Table>
);

LeaderboardTable.propTypes = {
    userDataList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            username: PropTypes.string.isRequired,
            points: PropTypes.number,
        })
    ),
};

export default LeaderboardTable;
