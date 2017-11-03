import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

const style = {
    width: 120,
    height: 120,
};

const TouchObject = ({data, doTouch, wsConn}) => {
    return (
      <IconButton
        style={style}
        onClick={() => doTouch(wsConn, data.id)} >
        <div className={data.style} />
      </IconButton>
    );
};

TouchObject.propTypes = {
    data: PropTypes.object,
    wsConn: PropTypes.object,
    doTouch: PropTypes.func,
};

export default TouchObject;
