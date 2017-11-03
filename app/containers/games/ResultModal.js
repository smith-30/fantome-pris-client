import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, close } from '../../actions';
import ResultModal from '../../components/games/ResultModal';

const ResultModalContainer = ({ modal, players, doClose, doInc, doDec }) => {
    console.log('container' + JSON.stringify(modal));
    return (
      <ResultModal
        modal={modal}
        players={players}
        doClose={doClose}
        doInc={doInc}
        doDec={doDec} />
    );
};

ResultModalContainer.propTypes = {
    modal: PropTypes.object,
    players: PropTypes.array,
    doClose: PropTypes.func,
    doInc: PropTypes.func,
    doDec: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        players: state.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doClose: () => dispatch(close()),
        doInc: (id) => dispatch(increment(id)),
        doDec: (id) => dispatch(decrement(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultModalContainer);
