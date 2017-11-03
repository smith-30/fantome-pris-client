import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { play, decrement } from '../../actions';
// import { filterableTable } from '../../styles/filterableTable.scss';
import { gameField } from '../../styles/gameField.scss';

const GameField = ({ game, onPlay, doDec }) => {
    // if (!game.wsConn) {
    //     game.wsConn.send(JSON.stringify({number: 1}));
    // }
    // console.log(game.wsConn.send(JSON.stringify({number: 1})));

    // let objectComponents = [];
    // objects.forEach(p => {
    //     objectComponents.push(
    //       <PlayerPanel key={p.id} player={p} doInc={doInc} doDec={doDec} />
    //     );
    // });


    return (
        <div>
            <RaisedButton
              label="Play"
              onClick={() => onPlay()}
              disabled={game.isPlay} />
            <RaisedButton
              label="Decrement"
              onClick={() => doDec(1)} />
            <div className={gameField}>
            </div>
        </div>
    );
};

GameField.propTypes = {
    game: PropTypes.object,
    objects: PropTypes.array,
    onPlay: PropTypes.func,
    doDec: PropTypes.func,
};

const objects = [];

const mapStateToProps = (state) => {
    return {
        game: state.game,
        objects: objects
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
)(GameField);
