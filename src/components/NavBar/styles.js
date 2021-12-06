import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem (calc(100vw - 1000px) / 2); // fullViewPort - 1000px / 2 => pdr and pdl
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const NavLink = styled(Link)`
  color: #3c4050;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  &.active {
    color: #ff5b00;
  }
`;

export const NavItem = styled.div`
  color: #3c4050;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  &.active {
    color: #ff5b00;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ff5b00;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ff5b00;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ab3d01;
  }
`;
