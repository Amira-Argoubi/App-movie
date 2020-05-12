import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./addNew.css";

class Add extends Component {
  state = {
    title: "",
  };

  render() {
    return (
      <div className="modal">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Movie
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <Row>
                <Col sm={12}>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGroupTof">
                      <Form.Control
                        type="text"
                        src={this.props.state.image}
                        alt="movie poster "
                        name="movieTof"
                        placeholder="URL..."
                        onChange={(e) => {
                          this.props.addfilmTof(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupTitle">
                      <Form.Control
                        type="text"
                        name="movieTitle"
                        placeholder="Title..."
                        onChange={(e) => {
                          this.props.addfilmTitle(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupRate">
                      <Form.Control
                        type="text"
                        name="movieRate"
                        placeholder="Rate..."
                        onChange={(e) => {
                          this.props.addfilmRate(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="addBut" onClick={this.props.addObjectMovie}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Add;
