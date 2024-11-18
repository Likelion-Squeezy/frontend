import { useState } from "react";
import styled from "styled-components";
import Add from "@assets/icon/icon-add--floatbtn.svg?react";
import { Squeeze } from "./Squeeze";
import { Eezy } from "./Eezy";

const maximumItemPerPage = 6;

export const SqueezyListItems = ({ items = [], index, setIndex }) => {
  const maxIndex = Math.ceil(items.length / maximumItemPerPage); // 최대 페이지 인덱스
  const indexArr = Array.from({ length: maxIndex }, (_, i) => i + 1); // 페이지 인덱스 배열

  const indexItem = items.slice(
    (index - 1) * maximumItemPerPage,
    index * maximumItemPerPage
  ); // 페이지 별 6개 씩 짜르기

  return (
    <Container>
      <Content>
        {indexItem.map((item, index) => {
          if (item.type === "squeezy") {
            // squeezy item
            return (
              <Squeeze
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.created_at}
              />
            );
          } else if (item.type === "eezy") {
            // eezy item
            return <Eezy key={item.id} id={item.id} />;
          }
          // 예외 종료
          return;
        })}
        <FloatingButton>
          <Add width={18} height={18} />
        </FloatingButton>
      </Content>
      <PageIndex>
        {indexArr.map((num) => {
          return (
            <PageIndexButton
              style={
                index === num ? { color: "#000000", fontWeight: "700" } : {}
              }
              onClick={() => setIndex(num)}
            >
              {num}
            </PageIndexButton>
          );
        })}
      </PageIndex>
      <Footer>
        <span>squeeeeezy</span>
      </Footer>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  margin-top: 9px;
  height: 500px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 8px 4px;
`;

const PageIndex = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  margin-top: 80px;
`;

const PageIndexButton = styled.span`
  border: none;
  background-color: transparent;

  ${(props) => props.theme.typography.h2};
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const FloatingButton = styled.button`
  position: absolute;
  right: 0;
  bottom: -60px;
  margin-right: 10px;

  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  & > span {
    ${(props) => props.theme.typography.button};
    font-weight: bold;
    letter-spacing: -4%;
    color: rgba(0, 0, 0, 0.5);
  }

  margin-top: 10px;
`;
