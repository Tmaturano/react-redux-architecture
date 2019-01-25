import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoriteSuccess, addFavoriteFailure } from '../actions/favorites';

export function* addFavorite(action) {
  try {
  // in the call function, the first parameter is what function I want to execute
  // and the second parameter is the parameters for that function
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };

    // will send this action to the aplication's reducers
    yield put(addFavoriteSuccess(repositoryData));
  } catch (error) {
    yield put(addFavoriteFailure('Error when adding the repository'));
  }
}
