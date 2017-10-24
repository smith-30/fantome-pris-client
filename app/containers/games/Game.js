import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { play } from '../../actions';
// import PlayButton from '../../components/games/PlayButton';
import { filterableTable } from '../../styles/filterableTable.scss';

const Game = ({ isPlay, onPlay }) => {
    return (
        <div className={filterableTable}>
        { isPlay ? null : <RaisedButton
                label="Play"
                onClick={() => onPlay()} /> }
        </div>
    );
};

Game.propTypes = {
    isPlay: PropTypes.bool,
    onPlay: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        isPlay: state.isPlay
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPlay: () => dispatch(play())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
