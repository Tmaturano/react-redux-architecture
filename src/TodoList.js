/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </ul>
    <button type="button" onClick={() => addTodo('New Todo')}>Add Todo</button>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

// everything that are in the dispatch, the reducers will listen
// addTodo is the property, that receives a text parameter and returns a dispatch
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: 'ADD_TODO', payload: { text } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
