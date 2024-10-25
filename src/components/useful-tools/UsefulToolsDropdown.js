import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import "./UsefulToolsDropdown.css";

function UsefulToolsDropdown({ showUsefulToolsDropdown, onToggle}) {
    
  return (
    <Dropdown show={showUsefulToolsDropdown}
    onToggle={onToggle}>
      <Dropdown.Menu  className='dropdown-menu-useful-tools'>
        <Dropdown.Item href="#/action-1">
              <Link className="dropdown-link" to="/tips">
              טיפים
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <Link className="dropdown-link" to="/rights">
              זכויות עובדים 
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <Link className="dropdown-link" to="/terms-of-use">
              תנאי שימוש
              </Link>
            </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UsefulToolsDropdown;