import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrap = styled.footer`
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  margin-top: 44px;
  padding: 44px 0;
  box-shadow: 0 -1px 0 #e1e7ed;

  @media (min-width: 576px) {
    margin-top: 88px;
  }
`;

const Conteiner = styled.div`
  width: 95%;
  max-width: 992px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--mainColor);
  line-height: 19px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--mainColor);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;

const Footer = props => (
  <FooterWrap className="footer">
    <Conteiner>
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-4">
          <Nav className="footer__nav">
            <Title>Airbnb</Title>
            <StyledLink to="/"> About </StyledLink>
            <StyledLink to="/"> Press </StyledLink>
            <StyledLink to="/"> Help </StyledLink>
          </Nav>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <Nav className="footer__nav">
            <Title>Discover</Title>
            <StyledLink to="/"> Travel credit </StyledLink>
            <StyledLink to="/"> Business </StyledLink>
            <StyledLink to="/"> Guidebooks </StyledLink>
          </Nav>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <Nav className="footer__nav">
            <Title>Hosting</Title>
            <StyledLink to="/"> Why host </StyledLink>
            <StyledLink to="/"> Hospitality </StyledLink>
            <StyledLink to="/"> Community </StyledLink>
          </Nav>
        </div>
      </div>
    </Conteiner>
  </FooterWrap>
);

export default Footer;
