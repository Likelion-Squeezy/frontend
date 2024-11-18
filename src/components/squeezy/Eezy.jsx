import { useEffect, useState } from "react";
import styled from "styled-components";
import EezyIcon from "@assets/icon/icon-eezy--small.svg?react";

export const Eezy = ({ id }) => {
  const [eezy, setEezy] = useState({
    title: "",
    content: "",
    tab: { title: "", url: "" },
  });
  useEffect(() =>
    // Fetch data
    // setEezy(data)
    {
      const fetchEezy = async () => {
        await new Promise((resolve, reject) => {
          chrome.runtime.sendMessage(
            { action: "getEezy", payload: { id: id } },
            (response) => {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
              } else resolve(response);
            }
          );
        }).then((response) => {
          if (response.success) setEezy(response.data);
        });
      };
      fetchEezy();
    }, []);
  return (
    <Container>
      <Contents>
        <SpanTitle>{eezy.title}</SpanTitle>
        <SpanSubTitle>{eezy.content.split("\n\n")[0]}</SpanSubTitle>
        <Content>
          <div
            dangerouslySetInnerHTML={{
              __html: eezy.content,
            }}
          />
          <Blur />
        </Content>
      </Contents>
      <HorizontalLine />
      <BottomContent>
        <BottomTitle>
          <SpanTitle>{eezy.tab.title}</SpanTitle>
        </BottomTitle>
        <SpanUrl>{eezy.tab.url}</SpanUrl>
      </BottomContent>
    </Container>
  );
};

const Container = styled.div`
  width: 160.121px;
  height: 158px;

  position: relative;
  border-radius: 14.846px;
  border: 1.06px solid #d7d7d7;

  border-radius: 14px;
  border: 1px solid #d7d7d7;
  background-color: #fff;
`;

const SpanTitle = styled.span`
  ${(props) => props.theme.typography.h3};
  color: #000;
  font-weight: 700;
  margin-left: 5px;

  display: block;
  text-overflow: ellipsis;
  overflow-y: hidden;
  white-space: nowrap;
`;

const SpanSubTitle = styled.span`
  ${(props) => props.theme.typography.subDescription};
  font-weight: 700;
  color: rgba(133, 133, 133, 1);
  display: block;
  text-overflow: ellipsis;
  overflow-y: hidden;
  white-space: nowrap;
`;

const SpanUrl = styled.span`
  ${(props) => props.theme.typography.subDescription};
  color: #858585;
  display: block;
  text-overflow: ellipsis;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 15px 19px 0px 19px;
`;

const Content = styled.div`
  position: relative;
  height: 60px;

  overflow-y: hidden;
  & > div {
    padding: 0px 0px 0px 12px;
    border-left: 5px solid #fa99b3;
    ${(props) => props.theme.typography.description};
    color: #000000;
    line-height: 150%;
  }
`;

const Blur = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.5)
  );
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d7d7d7;
`;

const BottomTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  padding: 10px 19px;
`;
