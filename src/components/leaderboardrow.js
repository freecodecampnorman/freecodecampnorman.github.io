import React from 'react';

const LeaderboardRow = ({ userData }) => (
    <tr>
        <td>{userData.name}</td>
        <td>{userData.username}</td>
        <td>{userData.points}</td>
    </tr>
);

export default LeaderboardRow;
