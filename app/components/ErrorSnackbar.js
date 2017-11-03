import PropTypes from 'prop-types';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const ErrorSnackbar = ({ errors }) => {
    return (
      <div>
          <Snackbar
            open={errors.open}
            message={errors.message}
            autoHideDuration={3000}
          />
      </div>
    );
};

ErrorSnackbar.propTypes = {
    errors: PropTypes.object
};

export default ErrorSnackbar;
