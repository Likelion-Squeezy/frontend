import styled from "styled-components";
import Add from "@assets/icon/icon-add--floatbtn.svg?react";

export const SqueezyList = () => {
  return (
    <Container>
      <ViewTypeButtonWrap>
        <ViewTypeButton
          style={{ backgroundColor: "#3C3C3C", color: "#ffffff" }}
        >
          All
        </ViewTypeButton>
        <ViewTypeButton>eezy</ViewTypeButton>
        <ViewTypeButton>squeeze</ViewTypeButton>
      </ViewTypeButtonWrap>
      <Content>
        <FloatingButton>
          <Add width={18} height={18} />
        </FloatingButton>
      </Content>
      <PageIndex>
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <PageIndexButton style={{ color: "#000000" }}>
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
  height: 600px;
  position: relative;
`;

const ViewTypeButtonWrap = styled.div`
  display: flex;
  gap: 4px;

  margin-top: 9px;
`;

const ViewTypeButton = styled.button`
  ${(props) => props.theme.typography.h3};
  color: #6a6a6a;
  background-color: transparent;

  height: 28px;
  padding: 4px 14px;
  border: 1px solid #e8e8e8;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageIndex = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PageIndexButton = styled.span`
  border: none;
  background-color: transparent;

  ${(props) => props.theme.typography.h2};
  color: rgba(0, 0, 0, 0.5);
`;

const FloatingButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
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
