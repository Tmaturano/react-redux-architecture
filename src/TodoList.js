/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
// "*"" means everything will be imported and "as" is an alias
import { Creators as TodoActions } from './store/ducks/todos';

const TodoList = ({ todos, addTodoRequest, removeTodoRequest }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button type="button" onClick={() => removeTodoRequest(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
    <button type="button" onClick={() => addTodoRequest('New Todo')}>Add Todo</button>
  </Fragment>
);

TodoList.propTypes = {
  addTodoRequest: PropTypes.func.isRequired,
  removeTodoRequest: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

// everything that are in the dispatch, the reducers will listen
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
