import { put } from 'redux-saga/effects';

import { Creators as TodoCreators } from '../ducks/todos';

export function* addTodo(action) {
  try {
    // will send this action to the aplication's reducers
    yield put(TodoCreators.addTodoSuccess(action.payload.text));
  } catch (error) {
    yield put(TodoCreators.addTodoFailure('Error when adding the Todo'));
  }
}

export function* removeTodo(action) {
  try {
    yield put(TodoCreators.removeTodoSuccess(action.payload.id));
  } catch (error) {
    yield put(TodoCreators.removeTodoFailure('Error when removing the Todo'));
  }
}
