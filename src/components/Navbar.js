import React, { useState, useEffect, useRef } from "react";
import "./components-css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import ApplyForm from "./ApplyForm";
import { useAuth } from "../services/AuthContext.js";
import DropdownUser from "./user/DropdownUser.js";
import UsefulToolsDropdown from "./useful-tools/UsefulToolsDropdown.js";

function Navbar() {
  const [click, setClick] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [showDropdownUser, setShowDropdownUser] = useState(false);
  const [showUsefulToolsDropdown, setShowUsefulToolsDropdown] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const userIconRef = useRef(null);

  const handleCloseModal = () => setShowApplyForm(false);
  const handleShowModal = () => setShowApplyForm(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(()=>{
    console.log('showDropdownUser',showDropdownUser)
  },[showDropdownUser])

  window.addEventListener("resize", showButton);

  // Handle login/logout redirection
  const handleLoginRedirect = () => {
    console.log('here')
    closeMobileMenu();
    if (!user) {
      navigate("/login");
      // Redirect to login page if no user is logged in
    } else if (user.role === "admin") {
      setShowDropdownUser(true);
    } else {
      setShowDropdownUser(true);
      console.log("Dropdown should be working");
    }
  };

  const handleToggleDropdownUser = (isOpen) => setShowDropdownUser(isOpen);

  const handleToggleUsefulToolsDropdown = (isOpen) => {
    setShowUsefulToolsDropdown(isOpen);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       !event.target.closest(".dropdown-menu") &&
  //       !event.target.closest(".icon-nav")
  //     ) {
  //       setShowDropdownUser(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link to="/" className="navbar-logo">
              <div className="logo-container">
                <img
                  className="navbar-logo"
                  alt="logo"
                  src="logo-job.webp"
                  onClick={closeMobileMenu}
                />
              </div>
            </Link>
            <li className="nav-item">
              <Link
                to="/about-company"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                פרופיל החברה
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jobs" className="nav-links" onClick={closeMobileMenu}>
                דרושים
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-links"
                onClick={handleToggleUsefulToolsDropdown}
              >
                כלים שימושים למועמד
                <UsefulToolsDropdown
                showUsefulToolsDropdown={showUsefulToolsDropdown}
                onToggle={handleToggleUsefulToolsDropdown}
              />
              </Link>
              
            </li>

            <li className="nav-item">
              <Link
                to="/users-CV"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                כתיבת קורות חיים
              </Link>
            </li>
          </ul>
          <div className="nav-icons">
            <i
              class="fa-solid fa-envelope style-icon-envelope"
              onClick={handleShowModal}
            ></i>

            <ApplyForm
              showApplyForm={showApplyForm}
              onHide={handleCloseModal}
              handleCloseModal={handleCloseModal}
            />
            <i
              class="fa-solid fa-user style-icon-user"
              onClick={handleLoginRedirect}
              ref={userIconRef}
            >
              <DropdownUser
        showDropdownUser={showDropdownUser}
        onToggle={handleToggleDropdownUser}
        iconRef={userIconRef}
      />
            </i>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
