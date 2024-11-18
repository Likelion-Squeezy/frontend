import styled from "styled-components";
import Logo from "@assets/icon/icon-logo--img.svg?react";
import { SqueezeItem } from "../components/squeeze/SqueezeItem";
import { useEffect, useState } from "react";

export const SqueezingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingCount, setLoadingCount] = useState(1);
  const [tabsData, setTabsData] = useState({
    tabs: [],
    capturedImage: "",
  });

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => {
        setLoadingCount((prevCount) => (prevCount < 3 ? prevCount + 1 : 1));
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [loadingCount, isLoading]);

  useEffect(() => {
    const getTabsData = async () => {
      await new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ action: "preview" }, (response) => {
          if (response) resolve(response);
        });
      }).then((res) => {
        setTabsData(res);
      });
    };
    getTabsData();
  }, []);

  return (
    <Container>
      <Header>
        <ProfileCircle>
          <Logo width={20} height={20} />
        </ProfileCircle>
        {isLoading ? `eezing${".".repeat(loadingCount)}` : "Complete!"}
      </Header>
      <SqueezeItem
        tabs={tabsData.tabs}
        image={tabsData.capturedImage}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
   
    </Container>
  );
};

const Container = styled.div`
  padding: 9px 14px;

  margin-top: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 12px;

  & > span {
    ${(props) => props.theme.typography.h1};
    font-weight: 500;
    color: #484848;
  }
`;

const ProfileCircle = styled.div`
  width: 31px;
  height: 31px;

  background-color: ${(props) => props.theme.color.white};
  border: 1px solid #d7d7d7;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;