import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

const TouchObject = ({data, doTouch, wsConn, style}) => {
    return (
      <IconButton
        style={style}
        onClick={() => doTouch(wsConn, data.id)}
        className="gameButton" >
        <div className={data.style}/>
      </IconButton>
    );
};

TouchObject.propTypes = {
    data: PropTypes.object,
    wsConn: PropTypes.object,
    doTouch: PropTypes.func,
    style: PropTypes.object,
};

export default TouchObject;
