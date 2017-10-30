import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, close } from '../../actions';
import ResultModal from '../../components/games/ResultModal';

const DeckField = ({ modal, players, doClose, doInc, doDec }) => {
    return (
      <ResultModal
        modal={modal}
        players={players}
        doClose={doClose}
        doInc={doInc}
        doDec={doDec} />
    );
};

DeckField.propTypes = {
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
        fetchCard: () => dispatch(close()),
        doInc: (id) => dispatch(increment(id)),
        doDec: (id) => dispatch(decrement(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckField);
