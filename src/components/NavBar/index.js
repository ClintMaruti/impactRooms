import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./styles";
import logo from "../../assets/imgs/IRlogo.png"

function NavBar() {
  return (
    <>
      <Nav>
        <NavLink to="/" >
            <img src={logo} alt="Logo" style={{width: "170px", height: "50px"}} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>Home</NavLink>
          <NavLink to="/about" activeStyle>About Us</NavLink>
          <NavLink to="/investors" activeStyle>For Investors</NavLink>
          <NavLink to="/evaluation" activeStyle>For Companies</NavLink>
          <NavLink to="/service" activeStyle>Service Partners</NavLink>
          <NavLink to="/contact" activeStyle>Contact</NavLink>
          <NavLink to="/service" activeStyle>Account</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default NavBar;
