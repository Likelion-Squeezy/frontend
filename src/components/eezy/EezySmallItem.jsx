import styled from "styled-components";

import Eezy from "@assets/icon/icon-eezy--small.svg?react";

export const EezySmallItem = () => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <Container>
      <Context>
        <Title>Exporing Ui Design</Title>
        <Content>
          <span>Abstract</span>
          <div>
            The document titled "Explore | Layers" promotes a platform for
            designers, emphasizing its functionally in allowing user to share
            work, connect with peers in the industry
          </div>
          <Blur></Blur>
        </Content>
      </Context>
      <Link>
        <PageName>
          <Eezy width={16} height={16} />
          <span>Pinterest</span>
        </PageName>
        <span>https://www.pinterest/pinterest</span>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 158px;
  height: 245px;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  border: 1px solid #d7d7d7;
  border-radius: 14px;
  overflow-y: hidden;
`;

const Title = styled.span`
  ${(props) => props.theme.typography.h3};
  color: #000000;
  font-weight: 500;
`;

const PageName = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  & > span {
    ${(props) => props.theme.typography.h3};
    font-weight: 500;
    color: #000000;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
  & > span,
  div {
    ${(props) => props.theme.typography.description};
    color: #858585;
  }
  & > div {
    height: 128px;
    border-left: 5px solid #fa99b3;
    padding: 0px 0px 0px 12px;
    line-height: 165%;
  }
`;
const Link = styled.div`
  padding: 9px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  & > span {
    ${(props) => props.theme.typography.subDescription};
    color: #858585;
  }
`;

const Context = styled.div`
  padding: 14px 12px 0px 12px;
  border-bottom: 1px solid #d7d7d7;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 45px;
  bottom: 0;
  background: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0));
  z-index: 1;
`;
