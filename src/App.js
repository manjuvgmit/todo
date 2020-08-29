import React from "react";
import "./App.css";
import Todos from "./components/todo/Todos";
import Header from "./components/layout/Header";
import AddToDo from "./components/todo/AddToDo";
import { v1 as uuid } from "uuid";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Take out the thrash.",
        completed: false,
        deleted: false,
      },
      {
        id: uuid(),
        title: "Dinner with wife.",
        completed: false,
        deleted: false,
      },
      {
        id: uuid(),
        title: "Reply to emails",
        completed: false,
        deleted: false,
      },
    ],
  };

  toggleComplete = (todo) => {
    console.log(todo.id);
    this.setState({
      todos: this.state.todos.map((val) => {
        if (val.id === todo.id) {
          val.completed = !todo.completed;
        }
        return val;
      }),
    });
  };

  deleteTodo = (todo) => {
    console.log(todo.id);
    this.setState({
      todos: this.state.todos.map((val) => {
        if (val.id === todo.id) {
          val.deleted = true;
        }
        return val;
      }),
    });
  };

  addToDo = (title) => {
    const newToDo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newToDo],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo} />
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
