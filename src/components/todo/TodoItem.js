import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  render() {
    const { todo, toggleComplete, deleteTodo } = this.props;
    const { id, title, completed } = todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            id={id}
            checked={completed ? "checked" : ""}
            onChange={toggleComplete.bind(this, todo)}
          />
          &nbsp;
          <label htmlFor={id}>{title}</label>
          <button style={closeBtnStyle} onClick={deleteTodo.bind(this, todo)}>
            X
          </button>
        </p>
      </div>
    );
  }

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      padding: "10px",
      // background: "#f4f4f4",
      background: "#fff6ea",
      color: "#2e2f3e",
      borderBottom: "2px #ccc dotted",
    };
  };
}

const closeBtnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
