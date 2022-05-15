import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarS className="navbar navbar-light">
          <a className="navbar-brand"></a>
        </NavbarS>
        <nav className="navbar navbar-expand-sm navbar-light bg-light ">
          <a className="navbar-brand" href="#">
            <Link to="/">
              <img src={logo} width="60" height="30" alt="store" />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Pricing
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                  <i className="fas fa-cart-plus">my cart</i>
                </ButtonContainer>
              </Link>
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

const NavbarS = styled.nav`
  background: var(--mainOrange);
`;
