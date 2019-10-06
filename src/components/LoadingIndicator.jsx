import PropTypes from 'prop-types';
import React from 'react';

const LoadingIndicator = ({ borderWidth, color, colorInactive, size }) => (
    <div
        style={{
            animation: 'loading-indicator 1s infinite forwards',
            border: `${borderWidth}px solid ${colorInactive}`,
            borderRadius: '50%',
            borderTopColor: color,
            borderTopWidth: `${borderWidth + 1}px`,
            height: size,
            margin: 'auto',
            transformOrigin: 'center',
            width: size,
        }}
    >
        {' '}
    </div>
);

LoadingIndicator.propTypes = {
    borderWidth: PropTypes.number,
    color: PropTypes.string,
    colorInactive: PropTypes.string,
    size: PropTypes.number,
};

LoadingIndicator.defaultProps = {
    borderWidth: 2,
    color: '#333',
    colorInactive: '#aaa',
    size: 32,
};

export default LoadingIndicator;
