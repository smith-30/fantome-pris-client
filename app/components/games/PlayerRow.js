import PropTypes from 'prop-types';
import React from 'react';

const PlayerRow = ({ data }) =>
    <div>
        <p>{data.name} = {data.price} </p>
    </div>;

PlayerRow.propTypes = {
    data: PropTypes.object
};

export default PlayerRow;
