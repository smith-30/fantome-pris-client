import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { play, decrement } from '../../actions';
import { filterableTable } from '../../styles/filterableTable.scss';

const Game = ({ game, onPlay, doDec }) => {
    console.log(game);
    return (
        <div className={filterableTable}>
        <RaisedButton
          label="Play"
          onClick={() => onPlay()} />
          { game.isPlay ? null : <RaisedButton
                  label="Play"
                  onClick={() => onPlay()} /> }
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
