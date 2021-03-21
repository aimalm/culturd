import "./SubNavF.css";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

function SubNavF({shoppingCart, setViewingCart}) {
  return (
    <div className="container-navbar">
      <Navbar bg="white fixed-top" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand className="logo">CULTURD</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto navbar">
            <LinkContainer to="/food">
              <Nav.Link className="nav-color">Home</Nav.Link>
            </LinkContainer>
            <NavDropdown className="nav-color" title="Worskhops">
              <LinkContainer to="/workshop">
                <NavDropdown.Item className="nav-color">
                  CULTURD WORKSHOP
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/food">
                <NavDropdown.Item className="nav-color" to="/food">
                  CULTURD KITCHING
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/food/search">
              <Nav.Link className="nav-color">Search</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/food/Profile">
              <Nav.Link className="nav-color">Your Profile</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/food/shopping_cart">
            <Button variant="outline-warning" >
              <ShoppingBasketIcon /> {shoppingCart?shoppingCart.length:0}
            </Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default SubNavF;
