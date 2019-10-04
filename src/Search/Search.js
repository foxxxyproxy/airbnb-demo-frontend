import React from "react";
import searchIcon from "./search-icon.svg";
import styled from "styled-components";

const Conteiner = styled.form`
  width: 100%;
  position: relative;
  margin-bottom: 60px;
`;

const SearchInput = styled.input`
  display: block;
  border: 1px solid #e1e7ed;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  padding: 25px 60px;
  font-size: 1rem;
  background: url(${searchIcon}) no-repeat 25px 25px;
  background-size: 1em;
  box-sizing: border-box;
  box-shadow: 0 3px 8px rgba(61, 78, 97, 0.2);
`;
const SearchButton = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 9px;
  cursor: pointer;
  border: 1px solid #fd5c63;
  background: #fd5c63;
  padding: 15px 50px;
  color: #ffffff;
  line-height: 19px;
  border-radius: 4px;
  @media (min-width: 576px) {
    display: inline-block;
  }
`;

const Search = props => (
  <Conteiner className="conteiner" action="#">
    <SearchInput
      className="search__input"
      id="search"
      name="search"
      type="search"
      autoFocus
      placeholder='Try "Los Angeles"'
    />
    <SearchButton type="submit" className="search__button">
      Search
    </SearchButton>
  </Conteiner>
);

export default Search;
