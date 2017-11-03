import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorSnackbar from '../components/ErrorSnackbar';

console.log(ErrorSnackbar);

const ErrorSnackbarContainer = ({errors}) => {
    return (
      <ErrorSnackbar errors={errors} />
    );
};

ErrorSnackbarContainer.propTypes = {
    errors: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
    };
};

export default connect(
  mapStateToProps
)(ErrorSnackbarContainer);
