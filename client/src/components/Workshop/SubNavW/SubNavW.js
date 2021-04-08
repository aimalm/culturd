import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {LinkContainer} from 'react-router-bootstrap'
import workshop from '../image/workshop.png'
import './SubNavW.css'

function SubNavW() {

    return (
      <div className="container-navbar ">
     <Navbar bg="white fixed-top" expand="lg">
        <LinkContainer to="/">
        <img src={workshop} className="logo-icon" alt=""/>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
              <LinkContainer to="/workshop"><Nav.Link className="nav-color">Home</Nav.Link></LinkContainer>
              <LinkContainer to="/workshop/about_us"><Nav.Link className="nav-color">About Us</Nav.Link></LinkContainer>
              <NavDropdown className="nav-color" title="Worskhops" >
                <LinkContainer to="/workshop/Afghanistan"><NavDropdown.Item className="nav-color" to="/food" >Afghanistan</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/workshop/Congo"><NavDropdown.Item className="nav-color" to="/food" >Congo</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/workshop/HongKong"><NavDropdown.Item className="nav-color" to="/food" >Chinese</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/workshop/Indonesia"><NavDropdown.Item className="nav-color" to="/food" >Indonesia</NavDropdown.Item></LinkContainer>
             </NavDropdown>
             <LinkContainer to="/contact_us"><Nav.Link className="nav-color">contact us</Nav.Link></LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    )
}
export default SubNavW