import React, { Component } from "react";
import {  Row, Col } from "react-bootstrap";
// import ReactDOM from 'react-dom';
// import Todo from './Todo'
// import TodoItem from "./TodoItem";
// import { BsFillTrashFill } from 'react-icons/fa';
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

export default class Todolist extends Component {
  render() {
    return (
      <li
        style={{ backgroundColor: "white", paddingLeft: "10px" }}
        className="mb-3"
      >
        <Row>
          <Col xs={11}> {this.props.title}</Col>

          <Col xs={1}>
            <button
              onClick={this.props.edit}
              style={{ borderColor: "white", backgroundColor: "white" }}
            >
              {" "}
              <AiFillEdit style={{ width: "15px", height: "15px" }} />
            </button>
            <button
              onClick={this.props.remove}
              style={{ borderColor: "white", backgroundColor: "white" }}
            >
              <AiTwotoneDelete style={{ width: "15px", height: "15px" }} />
            </button>
          </Col>
        </Row>
      </li>
    );
  }
}
