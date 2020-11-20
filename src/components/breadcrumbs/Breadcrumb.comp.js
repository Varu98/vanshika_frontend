import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const Breadcrumbs = ({ page }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
