import { actionTypes } from './actions';

const initialState = {values: {}};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_THEME_SUCCESS:
      return {
        name: action.name,
        values: action.theme
      };
    default:
      return state;
  }
};

export default reducer;
