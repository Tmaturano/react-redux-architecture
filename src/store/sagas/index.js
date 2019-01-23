import { all, takeLatest } from 'redux-saga/effects';

import { addFavorite } from './favorites';


// * is a generator function from javascript.
// generator we take async functions in the same way that async await does,
// but generator has more power.
// Babel convert the common async/await into generator
export default function* rootSaga() {
  // all is like the combineReducers of redux
  // yield is like the await from the async function
  yield all([
    // takeLatest: will take only one request at time (the latest).
    takeLatest('ADD_FAVORITE_REQUEST', addFavorite),
  ]);
}
