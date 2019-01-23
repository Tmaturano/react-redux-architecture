import { all } from 'redux-saga/effects';

// * is a generator function from javascript.
// generator we take async functions in the same way that async await does,
// but generator has more power.
// Babel convert the common async/await into generator
export default function* rootSaga() {
  // all is like the combineReducers of redux
  // yield is like the await from the async function
  yield all([]);
}
