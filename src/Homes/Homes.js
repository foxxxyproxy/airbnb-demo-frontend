import React from "react";
//import avatar from "./avatar.png";
//import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Card from "../Card/Card";

const Conteiner = styled.section`
  width: 100%;
`;
const Title = styled.h2`
  font-size: 28px;
  line-height: 33px;
  color: #3d4e61;
`;

//TODO: list cards
const Homes = props => (
  <Conteiner className="homes-list">
    <Title className="homes-list__title">Homes</Title>
    <div className="row">
      {props.items.map(item => {
        return (
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card
              href={item.href}
              imgSrc={item.imgSrc}
              title={item.title}
            ></Card>
          </div>
        );
      })}
    </div>
  </Conteiner>
);

export default Homes;
