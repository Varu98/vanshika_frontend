import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../../components/ticket-table/TicketTable.comp.js";
import tickets from "../../../assets/data/dummy-tickets.json";
import { Breadcrumbs } from "../../../components/breadcrumbs/Breadcrumb.comp.js";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button variant="info" size="lg">
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="  mt-2">Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-tickets">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
      <hr />
    </Container>
  );
};
