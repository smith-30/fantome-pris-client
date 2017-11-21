import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { touch } from '../../actions';
import TouchObject from '../../components/games/TouchObject';

const TouchObjectContainer = ({data, wsConn, doTouch, style}) => {
    return (
      <TouchObject data={data} wsConn={wsConn} doTouch={doTouch} style={style} />
    );
};

TouchObjectContainer.propTypes = {
    data: PropTypes.object,
    wsConn: PropTypes.object,
    doTouch: PropTypes.func,
    style: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        wsConn: state.game.wsConn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doTouch: (wsConn, ans) => dispatch(touch(wsConn, ans)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TouchObjectContainer);
