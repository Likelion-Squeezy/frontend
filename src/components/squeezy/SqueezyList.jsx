import styled from "styled-components";
import { useState } from "react";
import { SqueezyListItems } from "./SqueezyListItems";

const filteredData = ({ history = [], viewType }) => {
  if (viewType === "all") return history;
  else if (viewType === "squeezy")
    return history.filter((item) => item.type === "squeezy");
  else if (viewType === "eezy")
    return history.filter((item) => item.type === "eezy");
  else return [];
};

export const SqueezyList = ({ history = [] }) => {
  const [userViewType, setUserViewType] = useState("all");
  const [index, setIndex] = useState(1);
  const filteredHistory = filteredData({
    history: history,
    viewType: userViewType,
  });

  const hanldeClickType = (type) => {
    setUserViewType(type);
    setIndex(1);
  };

  return (
    <Container>
      <ViewTypeButtonWrap>
        <ViewTypeButton
          style={
            userViewType === "all"
              ? { color: "#ffffff", backgroundColor: "#3c3c3c" }
              : {}
          }
          onClick={() => {
            hanldeClickType("all");
          }}
        >
          All
        </ViewTypeButton>
        <ViewTypeButton
          style={
            userViewType === "eezy"
              ? { color: "#ffffff", backgroundColor: "#3c3c3c" }
              : {}
          }
          onClick={() => {
            hanldeClickType("eezy");
          }}
        >
          eezy
        </ViewTypeButton>
        <ViewTypeButton
          style={
            userViewType === "squeezy"
              ? { color: "#ffffff", backgroundColor: "#3c3c3c" }
              : {}
          }
          onClick={() => {
            hanldeClickType("squeezy");
          }}
        >
          squeeze
        </ViewTypeButton>
      </ViewTypeButtonWrap>
      <SqueezyListItems
        items={filteredHistory}
        index={index}
        setIndex={setIndex}
      />
    </Container>
  );
};

const Container = styled.div``;

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
  cursor: pointer;
`;
