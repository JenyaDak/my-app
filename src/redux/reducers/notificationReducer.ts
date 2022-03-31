import { SET_HIDE_NOTIFICATION, SET_SHOW_NOTIFICATION } from '../types';
const initialState = {
  showNotification: false,
  errors: null,
};

const notificationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SHOW_NOTIFICATION:
      return {
        ...state,
        showNotification: true,
        type: action.payload.type,
        message: action.payload.message,
      };
    case SET_HIDE_NOTIFICATION:
      return {
        ...state,
        showNotification: false,
        errors: null,
      };

    default:
      return state;
  }
};

export default notificationReducer;
