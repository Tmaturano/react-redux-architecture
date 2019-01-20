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
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
