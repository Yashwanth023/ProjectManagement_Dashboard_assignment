import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { getAuthToken } from '../utils/auth';

const ProjectForm = () => {
  const [project, setProject] = useState({ name: '', client: '', deadline: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!project.name || !project.client || !project.deadline) {
      setError('All fields are required');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/projects`, project, {
        headers: { 'x-auth-token': getAuthToken() }
      });
      setSuccess('Project added successfully');
      setProject({ name: '', client: '', deadline: '' });
    } catch (error) {
      setError('Error adding project');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add New Project</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form.Group>
        <Form.Label>Project Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
          placeholder="Enter project name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Client Name</Form.Label>
        <Form.Control
          type="text"
          name="client"
          value={project.client}
          onChange={handleChange}
          placeholder="Enter client name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Deadline</Form.Label>
        <Form.Control
          type="date"
          name="deadline"
          value={project.deadline}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Add Project
      </Button>
    </Form>
  );
};

export default ProjectForm;