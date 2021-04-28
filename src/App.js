import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/todo/Todos";
import Header from "./components/layout/Header";
import AddToDo from "./components/todo/AddToDo";
import { v1 as uuid } from "uuid";
import About from "./components/pages/About";
import axios from "axios";

class App extends React.Component {
  state = {
    todos: [
      // {
      //   id: uuid(),
      //   title: "Take out the thrash.",
      //   completed: false,
      //   deleted: false,
      // },
      // {
      //   id: uuid(),
      //   title: "Dinner with wife.",
      //   completed: false,
      //   deleted: false,
      // },
      // {
      //   id: uuid(),
      //   title: "Reply to emails",
      //   completed: false,
      //   deleted: false,
      // }
    ],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

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
    // Norrmal
    // const newToDo = {
    //   id: uuid(),
    //   title: title,
    //   completed: false,
    // };
    // this.setState({
    //   todos: [...this.state.todos, newToDo],
    // });
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((response) =>
        this.setState({ todos: [...this.state.todos, response.data] })
      );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddToDo addToDo={this.addToDo} />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
