import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Conteiner = styled.section`
  width: 100%;
`;
const Title = styled.h2`
  font-size: 28px;
  line-height: 33px;
  color: var(--mainColor);
`;

export default class Section extends React.Component {
  render() {
    return (
      <Conteiner className="list">
        <Title className="list__title">{this.props.SectionTitle} </Title>
        <div className="row">
          {this.props.items.list.map(id => {
            const data = this.props.items[id];
            return (
              <div className="col-xs-12 col-md-6 col-lg-4" key={id}>
                <Card
                  href={data.href}
                  imgSrc={data.imgSrc}
                  type={data.type}
                  title={data.title}
                  price={data.price}
                ></Card>
              </div>
            );
          })}
        </div>
      </Conteiner>
    );
  }
}
