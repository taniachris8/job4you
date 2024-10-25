import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../components/Buttons/Button";
import "./pages-css/PasswordRecoveryPage.css";
import Footer from "../components/Footer";

function PasswordRecoveryPage() {
  const [email, setEmail] = useState(null);

  const handleResetPassword = () => {};

  return (
    <>
      <div className="reset-password-container">
        <div className="recovery-password-wrapper">
          <h1 className="reset-password-title">Reset your password</h1>
          <div className="reset-password-input-wrapper">
            <InputGroup className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <Button variant="reset" onClick={handleResetPassword}>
              Reset
            </Button>
          </div>
          <Link to="/login" className="back-to-login-link">
            Back to Login
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PasswordRecoveryPage;
