import { all, takeLatest } from 'redux-saga/effects';

import { addFavorite } from './favorites';
import { addTodo, removeTodo } from './todo';

import { Types as FavoriteTypes } from '../ducks/favorites';
import { Types as TodoTypes } from '../ducks/todos';

// * is a generator function from javascript.
// generator we take async functions in the same way that async await does,
// but generator has more power.
// Babel convert the common async/await into generator
export default function* rootSaga() {
  // all is like the combineReducers of redux
  // yield is like the await from the async function
  yield all([
    // takeLatest: will take only one request at time (the latest).
    takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite),
    takeLatest(TodoTypes.ADD_REQUEST, addTodo),
    takeLatest(TodoTypes.REMOVE_REQUEST, removeTodo),
  ]);
}
