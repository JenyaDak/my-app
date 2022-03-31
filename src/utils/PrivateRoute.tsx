import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

interface IMyRouteProps extends RouteProps {
  children?: React.ReactElement;
  authenticated: boolean;
}

const PrivateRoute = ({ children, authenticated }: IMyRouteProps) => {
  if (authenticated && children) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
