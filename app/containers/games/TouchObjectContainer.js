import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { touch } from '../../actions';
import TouchObject from '../../components/games/TouchObject';

const TouchObjectContainer = ({data, wsConn, doTouch}) => {
    return (
      <TouchObject data={data} wsConn={wsConn} doTouch={doTouch}/>
    );
};

TouchObjectContainer.propTypes = {
    data: PropTypes.object,
    wsConn: PropTypes.object,
    doTouch: PropTypes.func
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
