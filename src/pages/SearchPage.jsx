import { useState, useEffect } from "react";
import styled from "styled-components";

const Content = () => {
  return (
    <Comp>
      <ContentImg src="https://dummyimage.com/50x50/d9d9d9/000000" />
      <TextBox>
        <Title>SUPER VERY MORE - AESPA EP.3 Don't you know I'm a Savage?</Title>
        <Url>https://superverymore.tv/aespa-ep3-dont-you-know...</Url>
      </TextBox>
    </Comp>
  );
};

export const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [history, setHistory] = useState([]);

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const getHistory = async () => {
    const json = await (await fetch(`http://13.124.143.64/api/users/profile/`)).json();
    setHistory(json);
    alert(history);
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <Container>
        <Header>Search</Header>
      </Container>
      <AppWrapper>
        <SearchBar type="text" value={keyword} onChange={onChange} placeholder="Keywords," />
        {/* <Content /> */}
      </AppWrapper>
    </>
  );
};

const Comp = styled.div`
  width: 335px;
  height: 50px;
  margin-top: 18px;
  display: flex;
  flex-direction: row;
`;

const TextBox = styled.div`
  width: 273px;
  height: 50px;
  margin-left: 12px;
`;

const Title = styled.div`
  height: 32px;
  ${(props) => props.theme.typography.h3};
  color: ${(props) => props.theme.color.black};
`;

const Url = styled.div`
  height: 14px;
  margin-top: 4px;
  ${(props) => props.theme.typography.subDescription};
  color: #858585;
`;

const ContentImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
