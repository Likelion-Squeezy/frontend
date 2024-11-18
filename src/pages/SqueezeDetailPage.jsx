import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SqueezeIcon from "@assets/icon/icon-squeeze--small.svg?react";
import Filter from "@assets/icon/icon-filter.svg?react";
import Plus from "@assets/icon/icon-plus.svg?react";

export const SqueezeDetailPage = () => {
  const params = useParams();
  const date = new Date();
  const [data, setData] = useState({
    title: "",
    tabs: [],
  });
  useEffect(() => {
    const fetchSqueeze = async () => {
      try {
        await new Promise((resolve, reject) => {
          chrome.runtime.sendMessage(
            { action: "getSqueeze", payload: { id: params.id } },
            (response) => {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
              } else resolve(response);
            }
          );
        }).then((response) => {
          if (response.success) {
            console.log(response.data);
            setData(response.data);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchSqueeze();
  }, []);
  return (
    <Container>
      <TitleBox>
        <SqueezeIcon width={24} height={24} />
        <SpanTitle>{data.title}</SpanTitle>
      </TitleBox>
      <Description>Memo</Description>
      <DateFilter>
        <SpanDate>
          {`${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`}
        </SpanDate>
        <Filter width={20} height={20} />
      </DateFilter>
      <SpanTabs>{data.tabs.length + " tabs"}</SpanTabs>
      <TabsBox>
        <TabsCell>
          <Plus width={50} height={37} />
          <TabsCellTitleUrl>
            <TabsCellTitle>Add this page</TabsCellTitle>
          </TabsCellTitleUrl>
        </TabsCell>
        {data.tabs.map((tab) => {
          return (
            <TabsCell key={tab.id} onClick={() => { window.open(tab.url)}}>
              <TabsCellFavicon
                style={{
                  background: `url(${tab.favicon}) no-repeat center`,
                  backgroundSize: "contain",
                }}
              />
              <TabsCellTitleUrl>
                <TabsCellTitle>{tab.title}</TabsCellTitle>
                <TabsCellUrl>{tab.url}</TabsCellUrl>
              </TabsCellTitleUrl>
            </TabsCell>
          );
        })}
      </TabsBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px 14px;
`;

const TitleBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const SpanTitle = styled.span`
  ${(props) => props.theme.typography.h2};
  color: #000000;
  font-weight: 700;
`;

const Description = styled.div`
  ${(props) => props.theme.typography.h2};
  padding: 13px 15px;

  border-radius: 14px;
  border: 1px solid #d7d7d7;
  background: #fff;

  margin-top: 14px;
`;

const SpanDate = styled.span`
  ${(props) => props.theme.typography.h3};
  color: #000000;
`;

const DateFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
`;
const SpanTabs = styled.span`
  ${(props) => props.theme.typography.h3};
  font-weight: 700;
  color: rgba(0, 0, 0, 0.34);

  margin-top: 4px;
`;

const TabsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-top: 16px;
`;

const TabsCell = styled.div`
  display: flex;
  gap: 12px;
`;

const TabsCellFavicon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: #d9d9d9;
`;

const TabsCellTitle = styled.span`
  ${(props) => props.theme.typography.h3};
  font-weight: 600;
  display: block;
  text-overflow: ellipsis;
  overflow-y: hidden;
  white-space: nowrap;
`;

const TabsCellUrl = styled.span`
  ${(props) => props.theme.typography.subDescription};
  color: #858585;
  display: block;
  text-overflow: ellipsis;
  overflow-y: hidden;
  white-space: nowrap;
`;

const TabsCellTitleUrl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  justify-content: center;
  width: 244px;
`;
