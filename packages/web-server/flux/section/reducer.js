import { actionTypes } from './actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SECTION_SUCCESS:
      return {
        path: action.path,
        values: action.section
      };
    default:
      return state;
  }
};

export default reducer;
