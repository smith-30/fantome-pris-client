import PropTypes from 'prop-types';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const ErrorSnackbar = ({ errors }) => {
    return (
      <Snackbar
        open={errors.open}
        message={errors.message}
        autoHideDuration={4000}
      />
    );
};

ErrorSnackbar.propTypes = {
    errors: PropTypes.object
};

export default ErrorSnackbar;
