import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";

export const TicketLists = () => {
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);

  useEffect(() => {}, [str, displayTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setStr(value);
    SearchTicket(value);
  };

  const SearchTicket = (sttr) => {
    const displayTicket = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDisplayTicket(displayTicket);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
};
