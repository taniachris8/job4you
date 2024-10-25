import React, {useContext} from "react";
import "./FilterJobs-css/FilterFreeSearch.css";
import { FilterContext } from "../../services/FilterContext";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";

function FilterFreeSearch({ className = "" }) {
    const { searchTerm, setSearchTerm, applyFilters } = useContext(FilterContext);
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      };

      const handleSearch = () => {
        applyFilters();
        navigate("/jobs");
      };

  return (
    <div className="input-wrapper">
        <InputGroup className="mb-3">
        <Form.Control
         className={`${className}`}
         type="search"
         placeholder="חיפוש חופשי"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         onKeyDown={handleKeyDown}
        />
      </InputGroup>
      <Button variant="search" onClick={handleSearch}>Search</Button>
    </div>
  );
}

export default FilterFreeSearch;
