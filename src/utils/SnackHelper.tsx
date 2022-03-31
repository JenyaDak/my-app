import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { setHideNotification } from '../redux/actions/userActions';
import type { Color } from '@material-ui/lab/Alert';

interface ISnackHelperProps {
  showNotification: boolean;
  type: Color;
  message: string;
  setHideNotification: () => void;
}

const SnackHelper = ({ showNotification, type, message, setHideNotification }: ISnackHelperProps) => {
  const handleClose = () => {
    setHideNotification();
  };

  return (
    <div>
      <Snackbar open={showNotification} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  notification: state.notification,
  showNotification: state.notification.showNotification,
  type: state.notification.type,
  message: state.notification.message,
});

const mapActionsToProps = {
  setHideNotification,
};

export default connect(mapStateToProps, mapActionsToProps)(SnackHelper);
