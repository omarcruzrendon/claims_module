import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MenuContent() {
  return (

    <Navbar bg="light">
      <Nav className="me-auto">
        <NavDropdown title="System" id="basic-nav-dropdown">
          <NavDropdown.Item>Home</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">System Reports</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Open Program</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Edit My Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Sponsor</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Close Program</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Card Funding Manager</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">System Alerts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Email Admins</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Order Status</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Order Processing</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Setup" id="basic-nav-dropdown">
          <NavDropdown.Item>Home</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Setup Marketer</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Setup Sponsors</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Add New Program</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Manage Admin users</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Setup Cards</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Program" id="basic-nav-dropdown" disabled>
        </NavDropdown>

        <Nav.Link disabled>Participant</Nav.Link>
        <Nav.Link disabled>Performance</Nav.Link>
        <Nav.Link disabled>Organization</Nav.Link>
        <Nav.Link disabled>Xchange</Nav.Link>
        <Nav.Link disabled>Analytics</Nav.Link>
        
      </Nav>

    </Navbar>
  )
}
