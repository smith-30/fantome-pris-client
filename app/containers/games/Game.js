import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { play, increment, decrement } from '../../actions';
import { filterableTable } from '../../styles/filterableTable.scss';

const Game = ({ isPlay, onPlay, doInc, doDec }) => {
    return (
        <div className={filterableTable}>
          { isPlay ? null : <RaisedButton
                  label="Play"
                  onClick={() => onPlay()} /> }
          <RaisedButton
            label="Increment"
            onClick={() => doInc(1)} />
          <RaisedButton
            label="Decrement"
            onClick={() => doDec(1)} />
        </div>
    );
};

Game.propTypes = {
    isPlay: PropTypes.bool,
    onPlay: PropTypes.func,
    doInc: PropTypes.func,
    doDec: PropTypes.func,
    players: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        isPlay: state.isPlay,
        players: state.users,
        modal: state.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPlay: () => dispatch(play()),
        doInc: (id) => dispatch(increment(id)),
        doDec: (id) => dispatch(decrement(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
