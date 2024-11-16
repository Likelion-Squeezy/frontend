import { useState } from "react";
import styled from "styled-components";

export const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <Container>
        <Header>Search</Header>
      </Container>
      <AppWrapper>
        <SearchBar type="text" value={keyword} onChange={onChange} placeholder="Keywords," />
      </AppWrapper>
    </>
  );
};

const Container = styled.div`
  padding: 9px 14px;

  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  ${(props) => props.theme.typography.title};
  color: ${(props) => props.theme.color.black};
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchBar = styled.input`
  width: 335px;
  height: 44px;
  padding: 0 20px;
  border: 1px solid #d7d7d7;
  border-radius: 14px;
  outline: none;
  font-size: 12px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;
