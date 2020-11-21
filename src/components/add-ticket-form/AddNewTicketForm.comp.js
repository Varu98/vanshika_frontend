import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
// import { AddTicket } from "../../pages/new-ticket/AddTicket.page";
import "./add-ticket-form.style.css";

export const AddNewTicket = ({ handleOnSubmit, handleOnChange, formData }) => {
  console.log(formData);

  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            value={formData.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button block variant="info" type="submit">
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
};
AddNewTicket.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,

  handleOnChange: PropTypes.func.isRequired,

  formData: PropTypes.object.isRequired,
};
