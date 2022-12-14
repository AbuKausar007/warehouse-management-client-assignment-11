import React from "react";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};

export default Loading;
