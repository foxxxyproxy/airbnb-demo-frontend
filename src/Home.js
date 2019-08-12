import React from "react";
import Header from "./Header/Header";
import Search from "./Search/Search";
import styled from "styled-components";

const Conteiner = styled.div`
  width: 80%;
  max-width: 992px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #3d4e61;
  line-height: 33px;
  display: block;
  width: 60%;
  @media (min-width: 768) {
    font-size: 36px;
    line-height: 42px;
  }
`;

const Home = () => (
  <html>
    <Header />
    <Conteiner className="main_conteiner">
      <main>
        <Title className="Title">
          Book unique homes and experiences all over the world.
        </Title>
        <Search />
      </main>
    </Conteiner>
  </html>
);

export default Home;
