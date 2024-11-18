import styled from "styled-components";
// img
import Icon from "@assets/icon/icon-logo--img.svg?react";
import Squeeze from "@assets/btn-squeeze.svg?react";
import Eezy from "@assets/btn-eezy.svg?react";
import Arrow from "@assets/icon/icon-arrow--right.svg?react";

function Preview() {
  function handleOnClick(btnType) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      chrome.runtime.sendMessage({ action: "open_sidepanel", tab: currentTab, type : btnType});
      window.close();
    });
  }

  return (
    <Container>
      <header>
        <Icon width={20} height={20} />
        <span>Do you wanna Squeezy?</span>
      </header>
      <div>
        <Button onClick={() => handleOnClick("squeeze")} attribute="squeeze">
          <Squeeze width={42} height={42} />
          <h2>squeeze</h2>
          <span>categorize current tabs</span>
        </Button>
        <Button onClick={() => handleOnClick("eezy")} attribute="eezy">
          <Eezy width={40} height={42} />
          <h2>eezy</h2>
          <span>summarize this page</span>
        </Button>
      </div>
      <History onClick={() => handleOnClick("history")}>
        <span>Your History</span>
        <Arrow width={7} height={12} />
      </History>
    </Container>
  );
}

const Container = styled.div`
  width: 270px;
  height: 210px;
  padding: 17px 19px;

  border: 0.5px #9f9f9f solid;
  filter: drop-shadow(2px 2px, 4px, rgba(0, 0, 0, 0.16));

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  & > header {
    display: flex;
    align-items: center;
    gap: 9px;
    & > span {
      ${(props) => props.theme.typography.button};
      font-weight: 500;
      color: #303030;
    }
  }
  & > div {
    display: flex;
    gap: 13px;
  }
`;

const Button = styled.button`
  width: 109px;
  height: 96px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.attribute === "squeeze"
      ? props.theme.color.yellow.default
      : props.theme.color.pink.default};
  border-radius: 18px;
  border: 1px solid
    ${(props) => (props.attribute === "squeeze" ? "#FFDB2B" : "#F485A3")};

  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.attribute === "squeeze"
        ? props.theme.color.yellow.hover
        : props.theme.color.pink.hover};
  }
  &:active {
    background-color: ${(props) =>
      props.attribute === "squeeze"
        ? props.theme.color.yellow.pressed
        : props.theme.color.pink.pressed};
  }
  & > h2 {
    ${(props) => props.theme.typography.button};
    font-weight: 500;
    color: #111111;
  }
  & > span {
    ${(props) => props.theme.typography.subDescription};
    font-size: 9px !important;
    color: rgba(17, 17, 17, 0.6);
  }
`;

const History = styled.div`
  width: 225px;
  height: 31px;
  padding: 6px 12px;

  display: flex;
  justify-content: space-between;

  border: 1px solid #e9e9e9;
  border-radius: 16px;
  cursor: pointer;

  & > span {
    ${(props) => props.theme.typography.button};
    font-weight: 500;
    color: #111111;
  }

  background-color: #e6e6e6;
  &:hover {
    background-color: #f7f7f7;
  }
  &:active {
    background-color: #c5c5c5;
  }
`;

export default Preview;
