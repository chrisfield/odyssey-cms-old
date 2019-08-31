import { actionTypes } from './actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ENV:
      return {
        env: action.env
      };
    default:
      return state;
  }
};

export default reducer;
