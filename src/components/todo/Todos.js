import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.todos
      .filter((todo) => !todo.deleted)
      .map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleComplete={this.props.toggleComplete}
          deleteTodo={this.props.deleteTodo}
        />
      ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
