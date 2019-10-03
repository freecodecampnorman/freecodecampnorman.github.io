import React from 'react';
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
                <LeaderboardRow userData={userData} />
            ))}
        </tbody>
    </Table>
);

export default LeaderboardTable;
