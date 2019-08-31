import { combineReducers } from 'redux';

import env from '../env/reducer';
import theme from '../theme/reducer';
import section from '../section/reducer';

const rootReducer = combineReducers({
  env,
  theme,
  section
});

export default rootReducer;
