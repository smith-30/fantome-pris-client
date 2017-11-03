import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { play, decrement } from '../../actions';
import gameObjects from '../../constants/gameObjects';
import TouchObjectContainer from './TouchObjectContainer';

const GameField = ({ objects }) => {
    // if (!game.wsConn) {
    //     game.wsConn.send(JSON.stringify({number: 1}));
    // }
    // console.log(game.wsConn.send(JSON.stringify({number: 1})));
    let objectComponents = [];
    objects.forEach(o => {
        objectComponents.push(
          <TouchObjectContainer key={o.id} data={o} />
        );
    });


    return (
        <div>
           {objectComponents}
        </div>
    );
};

GameField.propTypes = {
    game: PropTypes.object,
    objects: PropTypes.array,
    onPlay: PropTypes.func,
    doDec: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        game: state.game,
        objects: gameObjects
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
