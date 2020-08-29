import React from "react";

class AddToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add a ToDo.."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{ flex: "1", padding: "5px" }}
        />
      </form>
    );
  }
}

export default AddToDo;
