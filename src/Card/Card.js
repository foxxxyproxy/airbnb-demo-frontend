import React from "react";
//import searchIcon from "./search-icon.svg";
import styled from "styled-components";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  width: 100%;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
`;

const Name = styled.p``;
const Type = styled.p``;
const Price = styled.p``;

const Card = props => (
  <Conteiner className="card_wrapper">
    <a href={props.href}>
      <Photo src={props.imgSrc} alt={props.title} title={props.title} />
      <Name>{props.title}</Name>
      <Type> type</Type>
      <Price> price</Price>
    </a>
  </Conteiner>
);

export default Card;
