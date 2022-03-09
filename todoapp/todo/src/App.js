import Todo from "./Todo"
import {  Container, Row, Col } from "react-bootstrap";
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  return(<div >
    <Row  style={{ fontSize:"50px", color:"purple",display: 'flex', justifyContent: 'center',fontWeight:"bold"}}>TODO APP</Row>
     <Todo/></div>)
}

export default App;
