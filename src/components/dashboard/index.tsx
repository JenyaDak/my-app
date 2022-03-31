import React from 'react';
import { Paper, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';
import Grid from '@material-ui/core/Grid';
import './styles.scss';

const Dashboard = (props: any) => {
  return (
    <Box>
      <Grid container alignContent="center" alignItems="center" justifyContent="center" spacing={3}>
        <Grid item md={9}>
          <Paper>
            <Box>
              <Typography variant="h4">
                <Box fontWeight={600} letterSpacing={3}>
                  Dashboard
                </Box>
              </Typography>
            </Box>

            <Button variant="contained" color="primary" onClick={props.logoutUser}>
              Log out
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
