import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import {grey600} from 'material-ui/styles/colors';
import Players from 'material-ui/svg-icons/social/people';
import { open } from '../actions';

const ModalDrawerContainer = ({openModal}) => {
    return (
      <IconButton tooltip="Score Panel" onClick={() => openModal()}>
        <Players
            color={grey600}
      />
      </IconButton>
    );
};

ModalDrawerContainer.propTypes = {
    openModal: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(open()),
    };
};

export default connect(
  null,
  mapDispatchToProps
)(ModalDrawerContainer);
