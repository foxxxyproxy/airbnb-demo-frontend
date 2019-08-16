import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  width: 100%;
  a {
    text-decoration: none;
  }
  p {
    margin: 5px;
  }
`;

const Photo = styled.img`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
`;

const Type = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
`;
const Title = styled.p`
  font-weight: 600;
  line-height: 23px;
`;
const Price = styled.p`
  color: #687c94;
  font-weight: 400;
  line-height: 19px;
`;

const Card = props => (
  <Conteiner className="card_wrapper">
    <a href={props.href}>
      <Photo src={props.imgSrc} alt={props.title} />
      <Type>{props.type}</Type>
      <Title>{props.title}</Title>
      <Price>{props.price}$ per night</Price>
    </a>
  </Conteiner>
);

export default Card;
