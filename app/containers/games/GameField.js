import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { play, decrement } from '../../actions';
import gameObjects from '../../constants/gameObjects';
import TouchObjectContainer from './TouchObjectContainer';
import { gameField } from '../../styles/gameField.scss';

const GameField = ({ objects }) => {
    let objectComponents = [];
    // const objectNum = objects.length;
    // const deg = 360.0 / objectNum;
    // const red = (deg * Math.PI / 180.0);
    // const circleR = 100 * 2.5; // 100はobjectのwidthだがとりあえず決め打ち.

    objects.forEach((o, idx) => {
        console.log(idx);
        // const style = {
        //     width: 120,
        //     height: 120,
        // };
        // const i = idx + 1;
        // const x = Math.cos(red * i) * circleR + circleR;
        // let y = Math.sin(red * i) * circleR + circleR;

        // while (y > 400) {
        //     y = y - 400;
        // }

        // style.left = x;
        // style.top = y;

        objectComponents.push(
          <TouchObjectContainer key={o.id} data={o}/>
        );
    });


    return (
        <div className={gameField}>
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
