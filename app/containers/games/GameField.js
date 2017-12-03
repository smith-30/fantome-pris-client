import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { play, decrement } from '../../actions';
import gameObjects from '../../constants/gameObjects';
import TouchObjectContainer from './TouchObjectContainer';
import { gameField } from '../../styles/gameField.scss';

// @Todo デバイスによってスタイルの値を変えてしまう.
//       ipad, iphone等で分ける.事前に作っといてUAで切り替える. storeみたいな感じで
const styles = [
    {
        width: 120,
        height: 120,
        left: '5%'
    },
    {
        width: 120,
        height: 120,
        left: '40%',
        // top: '30%',
    },
    {
        width: 120,
        height: 120,
        left: '-15%',
        top: '40%',
    },
    {
        width: 120,
        height: 120,
        left: '65%',
        top: '35%',
    },
    {
        width: 120,
        height: 120,
        left: '-20%',
        top: '35%',
    },
];

const hidden = {visibility: 'visible'};

const GameField = ({ objects }) => {
    let objectComponents = [];

    objects.forEach((o, idx) => {
        objectComponents.push(
          <TouchObjectContainer key={o.id} data={o} style={styles[idx]}/>
        );
    });

    return (
      <div className={gameField} style={hidden}>
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
