import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { play, decrement } from '../../actions';
import { filterableTable } from '../../styles/filterableTable.scss';

const Game = ({ game, onPlay, doDec }) => {
    // if (!game.wsConn) {
    //     game.wsConn.send(JSON.stringify({number: 1}));
    // }
    // console.log(game.wsConn.send(JSON.stringify({number: 1})));
    return (
        <div className={filterableTable}>
            <RaisedButton
              label="Play"
              onClick={() => onPlay()}
              disabled={game.isPlay} />
            <RaisedButton
              label="Decrement"
              onClick={() => doDec(1)} />
        </div>
    );
};

Game.propTypes = {
    game: PropTypes.object,
    onPlay: PropTypes.func,
    doDec: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        game: state.game,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPlay: () => dispatch(play()),
        doDec: (id) => dispatch(decrement(id)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
