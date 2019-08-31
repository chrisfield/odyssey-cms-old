import { all } from 'redux-saga/effects';
import theme from '../theme/sagas';
import section from '../section/sagas';

function * rootSaga () {
  yield all([
    theme,
    section
  ]);
}

export default rootSaga;
