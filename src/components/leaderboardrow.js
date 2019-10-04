import React from 'react';
import PropTypes from 'prop-types';

const LeaderboardRow = ({ userData }) => (
    <tr>
        <td>{userData.name || 'Invalid username'}</td>
        <td>{userData.username}</td>
        <td>{userData.points || '--'}</td>
    </tr>
);

LeaderboardRow.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.string,
        username: PropTypes.string.isRequired,
        points: PropTypes.number,
    }),
};

export default LeaderboardRow;
