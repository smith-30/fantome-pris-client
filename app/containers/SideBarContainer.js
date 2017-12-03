import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import {grey600, green600} from 'material-ui/styles/colors';
import Players from 'material-ui/svg-icons/social/people';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import { open } from '../actions';
import { side } from '../styles/side.scss';

const SideBarContainer = ({openModal}) => {
    return (
      <div className={side}>
        <IconButton tooltip="Full Screen" onClick={() => openModal()}>
          <Power
              color={green600}
          />
        </IconButton>
        <IconButton tooltip="Score Panel" onClick={() => openModal()}>
          <Players
              color={grey600}
          />
        </IconButton>
      </div>
    );
};

SideBarContainer.propTypes = {
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
)(SideBarContainer);
