import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import Login from './components/Login';
import { isAuthenticated } from './utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Project Management Dashboard</h1>
      {authenticated ? (
        <Row>
          <Col md={4}>
            <ProjectForm />
          </Col>
          <Col md={8}>
            <ProjectList />
          </Col>
        </Row>
      ) : (
        <Login setAuthenticated={setAuthenticated} />
      )}
    </Container>
  );
}

export default App;