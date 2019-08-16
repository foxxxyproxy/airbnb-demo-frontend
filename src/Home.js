import React from "react";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Section from "./Section";
import Footer from "./Footer";
import styled from "styled-components";
import HomesList from "./homes-list";
import ExperiencesList from "./experiences-list";

const Conteiner = styled.div`
  width: 80%;
  max-width: 992px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 28px;
  color: var(--mainColor);
  line-height: 33px;
  display: block;
  width: 60%;
  margin-top: 44px;
  margin-bottom: 20px;
  @media (min-width: 576px) {
    margin-top: 88px;
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
        <Section SectionTitle="Homes" items={HomesList} />
        <Section SectionTitle="Experiences" items={ExperiencesList} />
      </main>
    </Conteiner>
    <Footer />
  </html>
);

export default Home;
