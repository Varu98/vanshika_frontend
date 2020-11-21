import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumb.comp";
import { AddNewTicket } from "../../components/add-ticket-form/AddNewTicketForm.comp";

const initialFromDt = {
  subject: "",
  issueDate: "",
  detail: "",
};
export const AddTicket = () => {
  const [formData, setFormData] = useState(initialFromDt);

  useEffect(() => {}, [formData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("form submit request recieved");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddNewTicket
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formData={formData}
          />
        </Col>
      </Row>
    </Container>
  );
};
