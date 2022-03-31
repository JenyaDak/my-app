import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';

import { connect } from 'react-redux';

interface IMyRouteProps extends RouteProps {
  children: React.ReactElement;
  authenticated: boolean;
  rest?: any;
}

const GuestRoute = ({ children, authenticated }: IMyRouteProps) => {
  if (authenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(GuestRoute);
