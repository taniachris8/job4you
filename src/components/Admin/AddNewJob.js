import React, { useState } from "react";
import Button from "../Buttons/Button.js";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./AddNewJob.css";
import domainOptions from "../options/DomainOptions.js";
import professionOptions from "../options/ProfessionOptions.js";
import areaOptions from "../options/AreaOptions.js";
import scopeOptions from "../options/ScopeOptions.js";

function AddNewJob({ onHide, showAddNewJob }) {
  const [jobTitle, setJobTitle] = useState("");
  const [domain, setDomain] = useState("");
  const [profession, setProfession] = useState("");
  const [area, setArea] = useState("");
  const [scope, setScope] = useState("");
  const [jobNumber, setJobNumber] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = {
      jobTitle,
      domain,
      profession,
      area,
      scope,
      jobNumber,
      jobDescription,
      jobRequirements,
    };

    try {
      const response = await fetch("http://localhost:8080/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Job added successfully", result);
        setJobTitle("");
        setDomain("");
        setProfession("");
        setArea("");
        setScope("");
        setJobNumber("");
        setJobDescription("");
        setJobRequirements("");
        onHide();
      } else {
        console.error("Failed to add job");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Modal show={showAddNewJob} onHide={onHide}>
        <Modal.Header closeButton bsPrefix="add-new-job-header">
          <Modal.Title>Add new job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="jobTitle">
              <Form.Label>Job Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="domain">
              <Form.Label>Domain:</Form.Label>
              <Form.Select
                type="text"
                placeholder="Domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                autoFocus
              >
                <option value="">Select Domain</option>
                {domainOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="profession">
              <Form.Label>Profession:</Form.Label>
              <Form.Select
                type="text"
                placeholder="Profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                autoFocus
              >
                <option value="">Select Profession</option>
                {professionOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="area">
              <Form.Label>Area:</Form.Label>
              <Form.Select
                type="text"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                autoFocus
              >
                <option value="">Select Area</option>
                {areaOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="scope">
              <Form.Label>Scope:</Form.Label>
              <Form.Select
                type="text"
                placeholder="Scope"
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                autoFocus
              >
                <option value="">Select Scope</option>
                {scopeOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobNumber">
              <Form.Label>Job Number:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job number"
                value={jobNumber}
                onChange={(e) => setJobNumber(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobDescription">
              <Form.Label>Job description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter each description on a new line"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobRequirements">
              <Form.Label>Job requirements:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter each requirement on a new line"
                value={jobRequirements}
                onChange={(e) => setJobRequirements(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Post Job
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddNewJob;
