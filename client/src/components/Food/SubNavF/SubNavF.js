import "./SubNavF.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import foodLogo from "../../ShareComponents/image/logofood.png";
import { FiLogOut } from "react-icons/fi";

function SubNavF({ shoppingCart, userData, setUserData }) {

  const logOut = () => {
    if (localStorage.hasOwnProperty("email")) {
      window.localStorage.removeItem("email");
    }
    if (localStorage.hasOwnProperty("userID")) {
      window.localStorage.removeItem("userID");
    }
    setUserData([])
  };

  return (
    <div className="container-navbar">
      <Navbar bg="white fixed-top nav-border" animation="false" expand="lg">
        <LinkContainer to="/">
          <img src={foodLogo} className="logo-icon" alt="" />
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse animation="false">
          <Nav className="ml-auto navbar">
            <LinkContainer to="/food">
              <Nav.Link className="nav-color">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/food/about_us">
              <Nav.Link className="nav-color">about us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about_us">
              <Nav.Link className="nav-color">contact us</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/food/product_list">
              <Nav.Link className="nav-color">List</Nav.Link>
            </LinkContainer>

            {userData.firstName === undefined ? (
              <>
                <LinkContainer to="/login">
                  <Nav.Link className="nav-color">Login</Nav.Link>
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
