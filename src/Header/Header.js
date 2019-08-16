import React from "react";
import logo from "./logo.svg";
import avatar from "./avatar.png";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #fffff;
  line-height: 19px;

  box-shadow: 0px 1px 0px #e1e7ed;
  padding: 0 26px;
`;

const AppLogo = styled.img`
  cursor: pointer;
  margin-right: auto;
`;

const StyledLink = styled(NavLink)`
  display: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--mainColor);
  margin: 0 30px;
  cursor: pointer;
  padding: 20px 0;

  &:hover {
    box-shadow: 0 2px 0 0 var(--mainColor);
  }

  @media (min-width: 576px) {
    display: inline-block;
  }
`;
const StLink = styled(Link)`
  margin: 0 0 0 30px;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Header = props => (
  <HeaderWrap className="header">
    <AppLogo className="header__logo" src={logo} alt="logo" title="AirBnb" />

    <StyledLink to="/"> Become a host </StyledLink>
    <StyledLink to="/"> Trips </StyledLink>
    <StyledLink to="/"> Messages </StyledLink>
    <StLink className="link--profile" to="/">
      <Avatar src={avatar} alt="User avatar" />
    </StLink>
  </HeaderWrap>
);

export default Header;
