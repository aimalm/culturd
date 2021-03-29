import "./SubNavF.css";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import foodLogo from "../../ShareComponents/image/logofood.png"

function SubNavF({shoppingCart}) {
  return (
    <div className="container-navbar">
      <Navbar bg="white fixed-top nav-border" animation="false" expand="lg">
        <LinkContainer to="/">
        <img src={foodLogo} className="logo-icon" alt=""/>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse animation="false">
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
            <LinkContainer to="/food/product_list">
              <Nav.Link className="nav-color">List</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/food/Profile">
              <Nav.Link className="nav-color">Profile</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/food/shopping_cart">
              <Nav.Link className="nav-color nav-basket-number"><ShoppingBasketIcon className="nav-basket-icon" />{shoppingCart?shoppingCart.length:0}</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default SubNavF;
