import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import {grey600, green600, red600} from 'material-ui/styles/colors';
import Players from 'material-ui/svg-icons/social/people';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import { open, cancelFullScreen, requestFullScreen } from '../actions';
import { side } from '../styles/side.scss';

const SideBarContainer = ({screen, openModal, _requestFullScreen, _cancelFullScreen}) => {
    console.log(_requestFullScreen);
    return (
      <div className={side}>
        {(() => {
            return screen.fullScreen ? <IconButton tooltip="Full Screen" onClick={() => _requestFullScreen()}>
            <Power
                color={green600}
            />
          </IconButton>
          :
          <IconButton tooltip="Exit" onClick={() => _cancelFullScreen()}>
            <Power
                color={red600}
            />
          </IconButton>;
        })()}

        <IconButton tooltip="Score Panel" onClick={() => openModal()}>
          <Players
              color={grey600}
          />
        </IconButton>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
        screen: state.screen,
    };
};

SideBarContainer.propTypes = {
    screen: PropTypes.object,
    openModal: PropTypes.func,
    _requestFullScreen: PropTypes.func,
    _cancelFullScreen: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(open()),
        _requestFullScreen: () => dispatch(requestFullScreen()),
        _cancelFullScreen: () => dispatch(cancelFullScreen()),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
