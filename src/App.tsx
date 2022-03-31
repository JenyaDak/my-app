import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/index';
import Dashboard from './components/dashboard/index';
import GuestRoute from './utils/GuestRoute';
import PrivateRoute from './utils/PrivateRoute';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CheckAuthentication } from './utils/CheckAuthentication';
import SnackHelper from './utils/SnackHelper';
import './app.scss';

const App: React.FC = () => {
  useEffect(() => {
    CheckAuthentication();
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<PrivateRoute />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <GuestRoute>
                  <Login />
                </GuestRoute>
              }
            />
          </Routes>
        </Router>
        <SnackHelper />
      </Provider>
    </div>
  );
};
export default App;
