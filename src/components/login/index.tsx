import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Paper, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';
import { useForm, Controller } from 'react-hook-form';
import './styles.scss';

interface IFormInput {
  username: string;
  password: string;
}

function Login(props: any) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(props.UI.loading);
  }, [props.UI]);

  const onSubmit = (data: IFormInput) => {
    setLoading(true);

    const userData = {
      username: data.username,
      password: data.password,
      sub_tenant_id: 'company',
    };
    props.loginUser(userData, props.history);
  };

  return (
    <Box>
      <Box>
        <Typography variant="h4">
          <Box fontWeight={600} letterSpacing={3}>
            SIGN IN
          </Box>
        </Typography>
      </Box>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Grid container alignContent="center" alignItems="center" justifyContent="center" spacing={3}>
          <Grid item md={9}>
            <Paper>
              <form>
                <Box className="field-wrapper">
                  <Controller
                    name={'username'}
                    control={control}
                    rules={{ required: true, maxLength: 20, pattern: /^[A-Za-z]+$/is }}
                    render={({ field: { onChange, value } }) => (
                      <TextField onChange={onChange} value={value || ''} label={'User name'} />
                    )}
                  />
                  {errors?.username?.type === 'required' && <p className="form-error">This field is required</p>}
                </Box>
                <Box className="field-wrapper">
                  <Controller
                    name={'password'}
                    control={control}
                    rules={{ required: true, maxLength: 20 }}
                    render={({ field: { onChange, value } }) => (
                      <TextField type="password" onChange={onChange} value={value || ''} label={'Password'} />
                    )}
                  />
                  {errors?.password?.type === 'required' && <p className="form-error">This field is required</p>}
                </Box>
                <Button
                  className="submit-button"
                  disabled={loading}
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  Submit
                  {loading && <CircularProgress size={15} color="secondary" />}
                </Button>
                <Button
                  onClick={() =>
                    reset({
                      username: '',
                      password: '',
                    })
                  }
                  variant={'outlined'}
                >
                  Reset
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
