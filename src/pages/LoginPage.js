import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./pages-css/LoginPage.css";
import Button from "../components/Buttons/Button.js";
import Footer from "../components/Footer.js";
import { useAuth } from "../services/AuthContext.js";
import AdminLoginForm from "../components/Admin/AdminLoginForm.js";
import { ApiService } from "../services/ApiService.js";
import { API_URL } from "../consts/general.js";

function LoginPage() {
  const [showAdminLoginForm, setShowAdminLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const ApiUserService = new ApiService(API_URL);

  const handleCloseAdminLoginForm = () => setShowAdminLoginForm(false);
  const handleShowAdminLoginForm = () => setShowAdminLoginForm(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiUserService.getAllUsers();
      const users = response.data;
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        login(user); // Call the login function from AuthContext
        console.log("Login successful");
        navigate("/jobs"); // Redirect to user dashboard
        setEmail("");
        setPassword("");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const handleRedirect = () => {
    navigate("/registration");
  };

  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <div className="login-form">
            <h1 className="login-title">התחברות</h1>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>כתובת דוא"ל</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>סיסמה</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="הכנס את הסיסמה שלך"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              {error && <p className="text-danger">{error}</p>}

              <Button variant="primary" type="submit">
                להתחבר
              </Button>
              <Link className="forgot-password-link" to="/password-recovery">
                שכחת סיסמא?
              </Link>
            </Form>
            <Button
              variant="primary"
              className="admin-login-btn"
              onClick={handleShowAdminLoginForm}
            >
              התחברות של מנהל מערכת
            </Button>
            <AdminLoginForm
              showAdminLoginForm={showAdminLoginForm}
              handleCloseAdminLoginForm={handleCloseAdminLoginForm}
            />
          </div>
        </div>
        <div className="redirect-to-signup-container">
          <h1 className="login-title">אם עדיין אין לך חשבון</h1>
          <div className="prg-wrapper">
            <div className="check">
              <i class="fa-solid fa-check prg-check"></i>
              <p className="prg">נהל את פרטי החשבון שלך</p>
            </div>
            <div className="check">
              <i class="fa-solid fa-check prg-check"></i>
              <p className="prg">הוסף פוסטים לרשימת משאלות</p>
            </div>
            <div className="check">
              <i class="fa-solid fa-check prg-check"></i>
              <p className="prg">שמור איתנו על קשר</p>
            </div>
          </div>
          <Button variant="secondary" onClick={handleRedirect}>
            להירשם
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
