import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap'
import './Nav.css'

function MainNav() {
    return (
    <div className="container-header">
      <Navbar Navbar bg="white  fixed-top navbar-main"  expand="lg">
          <LinkContainer to="/"><Navbar.Brand className="logo">CULTURD</Navbar.Brand></LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto navbar">
                <LinkContainer to="/contact_us"><Nav.Link className="nav-color">Contact Us</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

    )
}

export default MainNav
