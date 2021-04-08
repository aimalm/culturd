import "./SubNavF.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import foodLogo from "../../ShareComponents/image/logofood.png";
import { FiLogOut } from "react-icons/fi";

function SubNavF({ shoppingCart, userData, setUserData, logOut }) {


  return (
    <div className="container-navbar">
      <Navbar bg="white fixed-top nav-border" animation="false" expand="lg">
        <LinkContainer to="/">
          <img src={foodLogo} className="logo-icon" alt="" />
        </LinkContainer>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav" animation="false">
          <Nav className="ml-auto navbar">
            <LinkContainer to="/food">
              <Nav.Link className="nav-color">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/food/about_us">
              <Nav.Link className="nav-color">about us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact_us">
              <Nav.Link className="nav-color">contact us</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/food/product_list">
              <Nav.Link className="nav-color">List</Nav.Link>
            </LinkContainer>

            {userData.firstName === undefined ? (
              <>
                <LinkContainer to="/login">
<<<<<<< HEAD
                  <Nav.Link className="nav-color">sign in</Nav.Link>
=======
                  <Nav.Link className="nav-color">Sign in</Nav.Link>
>>>>>>> 6c3894f72f0d30ec6150895f45ce6ffc348e5de2
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link className="nav-color nav-basket-number">
                    <ShoppingBasketIcon className="nav-basket-icon" />
                    {shoppingCart ? shoppingCart.length : 0}
                  </Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/food/profile">
                  <Nav.Link className="nav-color">Profile</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/food/shopping_cart">
                  <Nav.Link className="nav-color nav-basket-number">
                    <ShoppingBasketIcon className="nav-basket-icon" />
                    {shoppingCart ? shoppingCart.length : 0}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">

                <Nav.Link className="nav-color" onClick={logOut}>
                  <FiLogOut className="nav-logout-icon" />
                </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default SubNavF;
