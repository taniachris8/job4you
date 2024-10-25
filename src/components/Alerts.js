import React from "react";
import Alert from 'react-bootstrap/Alert';

function Alerts({ variant, alertText, showAlert }) {
  return (
    <>
      {showAlert && (
        <Alert variant={variant}>
          {alertText}
        </Alert>
      )}
    </>
  );
}

export default Alerts;
