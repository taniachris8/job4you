import React, {useEffect} from "react";
import "./DropdownUser.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "../Buttons/Button.js";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/AuthContext.js";

function DropdownUser({ showDropdownUser, onToggle, iconRef }) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const iconRect = iconRef.current?.getBoundingClientRect();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  useEffect(() => {
    if (iconRect) {
      console.log(iconRect);  // This will show the icon's position and dimensions
    }
  }, [iconRect]);

  return (
    
    <Dropdown
      show={showDropdownUser}
      onToggle={onToggle}
    >
      <Dropdown.Menu className="dropdown-menu">
        {user ? (
          <>
            <Dropdown.Item href="#/action-1" className="dropdown-item">
              {user.name} {user.familyName}
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="dropdown-item">
              <Link className="dropdown-link" to="/users-settings">
                Settings
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="dropdown-item">
              <Link className="dropdown-link" to="/users-savedJobs">
                Saved Jobs
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="dropdown-item">
              <Link className="dropdown-link" to="/users-CV">
                My CVs
              </Link>
            </Dropdown.Item>
            <Button variant="logout" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Dropdown.Item href="#/action-1">No user logged in</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
    
  );
}

export default DropdownUser;
