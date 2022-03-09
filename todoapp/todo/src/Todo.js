import React, { Component } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";
// import ReactDOM from 'react-dom';
import { Container, Row } from "react-bootstrap";
import "./App.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
      list: [],
      id: "",
    };
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }
  handleChange = (e) => {
    const valueinput = e.target.value;
    this.setState({ value: valueinput, id: Math.floor(Math.random() * 100) });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value !== " ") {
      this.setState({
        list: [
          { id: this.state.id, todo: this.state.value },
          ...this.state.list,
        ],
        value: " ",
      });
    }
  };

  removeTodo(todo) {
    let list = this.state.list.filter((l) => l.todo !== todo.todo);
    this.setState({ list: list });
  }
  editTodo(todo) {
    const newTodo = prompt("change item");
    let newit = this.state.list;
    todo.todo = newTodo;
    this.setState({ list: newit });
  }

  // componentDidMount(){
  //    this.state.value.focus();
  //   }
  render() {
    return (
      <Container
        style={{ background: "rgb(241, 206, 212)" }}
        className="mt-5 pt-4 pb-3"
      >
        <Row xs={8} md={8} lg={8}>
          <Todoform
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.value}
          />
        </Row>

        <ul
          className="mt-3"
          style={{ listStyle: "none", width: "98%", paddingLeft: "2.4%" }}
        >
          {this.state.list.map((item) => (
            <Todolist
              key={item.id}
              title={item.todo}
              remove={() => this.removeTodo(item)}
              edit={() => this.editTodo(item)}
              value={this.state.value}
            />
          ))}
        </ul>
      </Container>
    );
  }
}
