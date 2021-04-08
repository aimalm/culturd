import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap'
import home from '../image/home.png'
import './Nav.css'

function MainNav() {
    return (
    <div className="container-header">
      <Navbar  bg="white  fixed-top navbar-main"  expand="lg">
      <LinkContainer to="/">
        <img src={home} className="logo-book" alt=""/>
        </LinkContainer>
      </Navbar>
    </div>

    )
}

export default MainNav
