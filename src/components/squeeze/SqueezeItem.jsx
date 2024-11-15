import styled from "styled-components";
import Icon from "@assets/icon/icon-squeeze--small.svg?react";
import FolderBack from "@assets/squeeze-folder--back.svg?react";
import FolderFront from "@assets/squeeze-folder--front.svg?react";

export const SqueezeItem = ({
  width = 197,
  height = 194,
  color = "#F9CF35",
  title = "Title",
  tabs = 0,
  images = [],
}) => {
  return (
    <Container width={width} height={height}>
      <FolderBack width={width} height={height} fill={color} />
      <FolderFront width={width} height={height / 1.8} fill={color} />
      <div
        style={{
          width: `${width}px`,
          height: `${height / 1.8}px`,
          padding: `${width / 10}px ${height / 10}px`,
        }}
      >
        <Icon width={width / 12} height={width / 12} />
        <FolderSpan size={width / 12} color="rgba(0, 0, 0, 1)">
          {title}
        </FolderSpan>
        <FolderSpan size={width / 12} color="rgba(0, 0, 0, 0.36)">
          {tabs} tabs
        </FolderSpan>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  & > svg:nth-child(2) {
    position: absolute;
    top: ${(props) => props.height / 2.5}px;
    left: 0;
    z-index: 2;
  }
  & > div {
    z-index: 3;
    position: absolute;
    top: ${(props) => props.height / 2.5}px;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
`;

const FolderSpan = styled.span`
  font-family: "Satoshi";
  font-size: ${(props) => props.size}px;
  font-weight: 500;
  color: ${(props) => props.color};
`;
