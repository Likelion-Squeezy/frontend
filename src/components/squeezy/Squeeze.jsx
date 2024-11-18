import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FolderFront from "@assets/squeeze-folder--front.svg?react";
import Icon from "@assets/icon/icon-squeeze--small.svg?react";

const colorArr = ["#F9CF35", "#FC896C", "#50E2D4"];

export const Squeeze = ({ id, title, date }) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate(`/squeeze/detail/${id}`)}
      style={{ backgroundColor: `${colorArr[id % 3]}` }}
    >
      <FolderFrontWrap>
        <FolderFront width={160.121} height={88} fill={colorArr[id % 3]} />
      </FolderFrontWrap>
      <>
        <ImageBox style={{ zIndex: 19 }} />
        <ImageBox style={{ zIndex: 18, rotate: "-3deg" }} />
        <ImageBox style={{ zIndex: 19, rotate: "-6deg" }} />
      </>
      <TextBox>
        <Icon width={13} height={13} />
        <SpanTitle>{title}</SpanTitle>
        <SpanDate>{date}</SpanDate>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  width: 160.121px;
  height: 158px;

  position: relative;
  border-radius: 14.846px;
  border: 1.06px solid #d7d7d7;
  z-index: 1;
`;

const FolderFrontWrap = styled.div`
  position: absolute;
  top: 69px;
  left: -1px;
  z-index: 20;
`;

const ImageBox = styled.div`
  width: 112.403px;
  height: 104.98px;
  border-radius: 14.846px;
  box-shadow: -2.121px 2.121px 9.862px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: absolute;
  left: 20px;
  top: 25px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18 10px;
  gap: 4px;

  position: absolute;
  top: 90px;
  left: 12px;
  z-index: 21;
`;

const SpanTitle = styled.span`
  ${(props) => props.theme.typography.subDescription};
  font-size: 10px;
  font-weight: 600;
  color: #000;
`;

const SpanDate = styled.span`
  ${(props) => props.theme.typography.subDescription};
  font-size: 10px;
  color: rgba(0, 0, 0, 0.34);
  font-weight: 700;
`;
