import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as FavoriteCreators } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
  // in the call function, the first parameter is what function I want to execute
  // and the second parameter is the parameters for that function
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const isDuplicated = yield select(state => state.favorites.data.find(
      favorite => favorite.id === data.id,
    ));

    if (isDuplicated) {
      yield put(FavoriteCreators.addFavoriteFailure('The repository is duplicated'));
      return;
    }

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };

    // will send this action to the aplication's reducers
    yield put(FavoriteCreators.addFavoriteSuccess(repositoryData));
  } catch (error) {
    yield put(FavoriteCreators.addFavoriteFailure('Error when adding the repository'));
  }
}
