import React from 'react';
import PropTypes from 'prop-types';

const LeaderboardRow = ({ userData }) => {
    const userNameLink = 'https://www.freecodecamp.org/' + userData.username;

    return (
        <tr>
            <td>{userData.name || 'Invalid username'}</td>
            <td>
                <a href={userNameLink}>{userData.username}</a>
            </td>
            <td>{userData.points || '--'}</td>
        </tr>
    );
};

LeaderboardRow.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.string,
        username: PropTypes.string.isRequired,
        points: PropTypes.number,
    }),
};

export default LeaderboardRow;
