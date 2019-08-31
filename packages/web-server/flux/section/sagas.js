import fetch from 'isomorphic-unfetch';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes, loadSectionSuccess, loadSectionFail } from './actions';

function * loadSection({path}) {
  const thePath = (path === '/')? 'home': path;
  try {
    const api = 'http://localhost:3010';
    const res = yield fetch(`${api}/sections/${thePath}`);
    const section = yield res.json();
    yield put(loadSectionSuccess(thePath, section));
  } catch (err) {
    console.error('Saga error loading section: ', err);
    put(loadSectionFail(err));
  }
}

export default takeLatest(actionTypes.LOAD_SECTION, loadSection);
