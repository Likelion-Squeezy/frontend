import styled from "styled-components";
import Icon from "@assets/icon/icon-squeeze--small.svg?react";
import FolderBack from "@assets/squeeze-folder--back.svg?react";
import FolderFront from "@assets/squeeze-folder--front.svg?react";
import FolderFrontSmall from "@assets/squeeze-folder--front-small.svg?react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const colorArr = ["#F9CF35", "#FC896C", "#50E2D4"];

export const SqueezeItem = ({
  width = 197,
  height = 194,
  color = "#F9CF35",
  tabs = [],
  image = "",
  setIsLoading,
  isLoading = true,
}) => {
  const navigate = useNavigate();
  const [squeezes, setSqueezes] = useState([]);
  useEffect(() => {
    const fetchTitle = async () => {
      await new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(
          {
            action: "squeezing",
            payload: {
              tabs: tabs,
              image: image,
            },
          },
          (response) => {
            if (response) resolve(response);
          }
        );
      }).then((res) => {
        if (res.success) {
          setSqueezes(res.data.squeeze);
          setIsLoading(false);
        }

        //
      });
    };
    if (tabs.length > 0) fetchTitle();
  }, [tabs]);
  return (
    <Container width={width} height={height}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FolderBack width={width} height={height} fill={color} />
        {!isLoading && (
          <>
            <FrontImage src={image} alt="front" style={{ zIndex: 19 }} />
            <BackImage style={{ zIndex: 18, rotate: "-6deg" }} />
            <BackImage style={{ zIndex: 17, rotate: "-12deg" }} />
          </>
        )}

        <div style={{ position: "absolute", top: "100px", zIndex: 21 }}>
          <FolderFront width={width} height={height / 1.8} fill={color} />
        </div>
        <ContentDiv
          style={{
            width: `${width}px`,
            height: `${height / 1.8}px`,
            padding: `${width / 10}px ${height / 10}px`,
            zIndex: 22,
          }}
        >
          <Icon width={width / 12} height={width / 12} />
          {!isLoading && (
            <FolderSpan size={width / 12} color="rgba(0, 0, 0, 1)">
              {tabs.length} tabs is squeezed!
            </FolderSpan>
          )}
          {!isLoading && (
            <FolderSpan size={width / 12} color="rgba(0, 0, 0, 0.36)">
              {tabs.length} tabs
            </FolderSpan>
          )}
        </ContentDiv>
      </div>

      {!isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <HistoryButton onClick={() => navigate("/user")}>
            GO To History
          </HistoryButton>
        </div>
      )}
      <SqueezeSmallBoxWrap>
        {squeezes.map((squeeze, index) => {
          return (
            <SqueezeSmallBox
              key={squeeze.id}
              style={{ backgroundColor: `${colorArr[index % 3]}` }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "45px",
                }}
              >
                <div style={{ position: "relative", zIndex: 21 }}>
                  <FolderFrontSmall fill={`${colorArr[index % 3]}`} />
                </div>
              </div>
              {squeeze.tabs.map((_, index) => {
                return (
                  <BackImageSmall
                    style={{
                      rotate: `-${index * 3}deg`,
                      zIndex: `${20 - index}`,
                    }}
                    key={index}
                  />
                );
              })}
              <ContentDivSmall>
                <Icon width={8} height={8} />
                <SpanTitleSmall>{squeeze.title}</SpanTitleSmall>
                <SpanTitleTabs>{squeeze.tabs.length + " tabs"}</SpanTitleTabs>
              </ContentDivSmall>
            </SqueezeSmallBox>
          );
        })}
      </SqueezeSmallBoxWrap>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 1;

  & > svg:nth-child(2) {
    position: absolute;
    top: ${(props) => props.height / 2.5}px;
    left: 0;
    z-index: 2;
  }
`;
const ContentDiv = styled.div`
  z-index: 21;
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const FolderSpan = styled.span`
  font-family: "Satoshi";
  font-size: ${(props) => props.size}px;
  font-weight: 500;
  color: ${(props) => props.color};
`;

const FrontImage = styled.img`
  position: absolute;
  top: 23px;

  width: 137.302px;
  height: 128.235px;
  border-radius: 18.134px;
  box-shadow: -2.591px 2.591px 12.046px 0px rgba(0, 0, 0, 0.1);
`;

const BackImage = styled.div`
  position: absolute;
  top: 32px;

  width: 137.302px;
  height: 128.235px;
  border-radius: 18.134px;
  box-shadow: -2.591px 2.591px 12.046px 0px rgba(0, 0, 0, 0.1);

  background-color: white;
`;

const BackImageSmall = styled.div`
  position: absolute;
  top: 16px;
  left: 21px;

  width: 60.302px;
  height: 64.235px;
  border-radius: 12.134px;
  box-shadow: -2.591px 2.591px 12.046px 0px rgba(0, 0, 0, 0.1);

  background-color: white;
`;

const HistoryButton = styled.button`
  color: #fff;
  ${(props) => props.theme.typography.h3};

  display: flex;
  padding: 5px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #000;

  margin-top: 20px;

  cursor: pointer;
`;

const SqueezeSmallBox = styled.div`
  display: flex;
  width: 104px;
  height: 102.623px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6.495px;

  position: relative;
  border-radius: 9.642px;
  border: 0.689px solid #d7d7d7;
  background-color: #d0d0d0;
`;

const SqueezeSmallBoxWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 24px;
`;

const ContentDivSmall = styled.div`
  display: flex;
  padding: 10px 9px;
  flex-direction: column;
  justify-content: center;
  gap: 3.25px;

  position: absolute;
  top: 45px;
  z-index: 21;
`;

const SpanTitleSmall = styled.span`
  ${(props) => props.theme.typography.subDescription};
  font-weight: 500;
  font-size: 8px;
  color: rgba(72, 72, 72, 1);
`;
const SpanTitleTabs = styled.span`
  ${(props) => props.theme.typography.subDescription};
  font-size: 6px;
  color: rgba(0, 0, 0, 0.34);
`;
