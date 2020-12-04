import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";

const ticket = tickets[0];
export const Ticket = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {}, [message]);

  const handleOnSubmit = () => {
    alert("Form Submitted");
  };

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject"> Subject :{ticket.subject}</div>
          <div className="date"> Ticket Opened :{ticket.addedAt}</div>
          <div className="status"> Status :{ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
