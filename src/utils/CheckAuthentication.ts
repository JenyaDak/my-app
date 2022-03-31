// import jwtDecode from 'jwt-decode';
import { logoutUser } from '../redux/actions/userActions';
import store from '../redux/store';
import { SET_AUTHENTICATED } from '../redux/types';
import Cookies from 'js-cookie';

export const CheckAuthentication = () => {
  const authToken = Cookies.get('token') as any;

  if (authToken) {
    if (authToken * 1000 < Date.now()) {
      store.dispatch(logoutUser());
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
    }
  }
};
