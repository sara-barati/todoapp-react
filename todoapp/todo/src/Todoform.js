import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default class Todoform extends Component {
  render() {
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Row>
                <Col xs={9}>
                  <Form.Control
                    onChange={this.props.handleChange}
                    type="text"
                    value={this.props.value}
                    placeholder="add something..."
                    style={{
                      backgroundColor: "rgb(248, 245, 245)",
                      borderColor: "pink",
                      paddingLeft: "10px",
                    }}
                  />
                </Col>
                <Col xs={3}>
                  <Button
                    onClick={this.props.handleSubmit}
                    style={{
                      backgroundColor: "rgb(248, 245, 245)",
                      borderColor: "pink",
                      color: "rgb(202, 40, 202)",
                      fontSize: "20px",
                      width: "100%",
                    }}
                  >
                    Add item
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}
