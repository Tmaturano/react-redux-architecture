/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'todos/ADD_REQUEST',
  ADD_SUCCESS: 'todos/ADD_SUCCESS',
  ADD_FAIL: 'todos/ADD_FAIL',
  REMOVE_REQUEST: 'todos/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'todos/REMOVE_SUCCESS',
  REMOVE_FAIL: 'todos/REMOVE_FAIL',
};

/**
 * Reducer
 */

const INITIAL_STATE = [
  {
    id: 1,
    text: 'Make coffee',
  },
  {
    id: 2,
    text: 'Study React',
  },
];

export default function todos(state = INITIAL_STATE, action) {
  // State parameter is how the app state is before the action
  // the action, basically is the action that was fired by the app
  // All reducers always will listen all actions, however, inside the reducer
  // we manipulate the action.
  // Each action has a TYPE that is like an ID
  switch (action.type) {
    case Types.ADD_REQUEST:
      return [...state, { id: Math.random(), text: action.payload.text }];
    case Types.REMOVE_REQUEST:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}


/**
 * Actions
 */

export const Creators = {
  addTodoRequest: text => ({
    type: Types.ADD_REQUEST,
    payload: { text },
  }),

  addTodoSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addTodoFailure: error => ({
    type: Types.ADD_FAIL,
    payload: { error },
  }),

  removeTodoRequest: id => ({
    type: Types.REMOVE_REQUEST,
    payload: { id },
  }),

  removeTodoSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  removeTodoFailure: error => ({
    type: Types.ADD_FAIL,
    payload: { error },
  }),
};
