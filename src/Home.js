import React from "react";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Section from "./Section";
import Footer from "./Footer";
import styled from "styled-components";
import HomesList from "./homes-list";
import ExperiencesList from "./experiences-list";

const Conteiner = styled.div`
  width: 95%;
  max-width: 992px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 28px;
  color: var(--mainColor);
  line-height: 33px;
  display: block;
  width: 60%;
  margin-bottom: 20px;
  @media (min-width: 576px) {
    font-size: 36px;
    line-height: 42px;
  }
`;

function mapItemsToObjects(items) {
  const reducedItems = items.reduce(function(prevValue, currentValue) {
    return {
      ...prevValue,
      [currentValue.id]: currentValue
    };
  }, {});

  return {
    ...reducedItems, // copy reducedItems
    list: items.map(function(item) {
      return item.id; // return only id
    })
  };
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Conteiner className="main_conteiner">
          <main>
            <Title className="Title">
              Book unique homes and experiences all over the world.
            </Title>
            <Search />
            <Section
              SectionTitle="Homes"
              items={mapItemsToObjects(HomesList.items)}
            />
            <Section
              SectionTitle="Experiences"
              items={mapItemsToObjects(ExperiencesList.items)}
            />
          </main>
        </Conteiner>
        <Footer />
      </div>
    );
  }
}
