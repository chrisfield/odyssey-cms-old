import fetch from 'isomorphic-unfetch';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes, loadThemeSuccess, loadThemeFail } from './actions';

function * loadTheme({name}) {
  try {
    const api = 'http://localhost:3010';
    const res = yield fetch(`${api}/themes/${name}`);
    const theme = yield res.json();
    yield put(loadThemeSuccess(name, theme));
  } catch (err) {
    console.error('Saga error loading theme: ', err);
    put(loadThemeFail(err));
  }
}

export default takeLatest(actionTypes.LOAD_THEME, loadTheme);
