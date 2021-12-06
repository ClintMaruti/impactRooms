import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavItem,
} from "./styles";
import logo from "../../assets/imgs/IRlogo.png";

function NavBar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "170px", height: "50px" }}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          {/* <NavLink to="/" activeStyle>Home</NavLink>
          <NavLink to="/about" activeStyle>About Us</NavLink>
          <NavLink to="/investors" activeStyle>For Investors</NavLink>
          <NavLink to="/evaluation" activeStyle>For Companies</NavLink>
          <NavLink to="/service" activeStyle>Service Partners</NavLink>
          <NavLink to="/contact" activeStyle>Contact</NavLink>
          <NavLink to="/service" activeStyle>Account</NavLink> */}
          <NavItem>
            <a
              href="https://impactrooms.com/"
              style={{ textDecoration: "none", color: "#3c4050" }}
            >
              Home
            </a>
          </NavItem>
          <NavItem>
            <a
              href="https://impactrooms.com/about-us/"
              style={{ textDecoration: "none", color: "#3c4050" }}
            >
              About Us
            </a>
          </NavItem>
          <NavItem>
            <a
              href="https://impactrooms.com/investors/"
              style={{ textDecoration: "none", color: "#3c4050" }}
            >
              Investors
            </a>
          </NavItem>
          <NavLink to="/evaluation" activeStyle>
            Companies
          </NavLink>
          <NavItem>
            {" "}
            <a
              href="https://impactrooms.com/investors/"
              style={{ textDecoration: "none", color: "#3c4050" }}
            >
              Contact
            </a>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default NavBar;
