import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  height: 200px;
  justify-content: space-between;
`;

export const CompanySection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const CompanyLogo = styled.img`
  max-width: 200px;
  max-height: 165px;
  margin-left: 50px;
`;

export const CompanyName = styled.h1`
  font-size: 24px;
  margin-bottom: 3px;
  margin-top: -55px;
  margin-left: 1rem;
  position: absolute;
`;

export const CompanyID = styled.div`
  position: absolute;
  padding-top: 2rem;
  padding-left: 1rem;
  font-size: 10px;
  color: #909090;
`;

export const Status = styled.div`
  border-radius: 40px;
  width: 70px;
  height: 15px;
  background-color: #06aff0;
  color: #fff;
  font-size: 8px;
  padding: 2px 20px;
  margin-left: 1rem;
`;

export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const ChatWithUs = styled(Link)`
  border-radius: 4px;
  background: #3f3f3f;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff5b00;
  }
`;

export const EditProfile = styled(Link)`
  border-radius: 4px;
  background: #ff5b00;
  padding: 10px 22px;
  margin-left: 10px;
  color: #000;
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
