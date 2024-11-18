import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Eezy from "@assets/icon/icon-eezy--small.svg?react";
import Edit from "@assets/icon/icon-edit.svg?react";

export const EezyDetailPage = () => {
  const { id } = useParams();
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
      <EezyBox>
        <Header>
          <Title>
            <Eezy />
            <span>{eezy.title}</span>
          </Title>
          <div>
            <Edit width={13} height={13} />
          </div>
        </Header>
        <Contents>
          <Content>
            <span>{eezy.title}</span>
            <div>
              {eezy.content}
            </div>
          </Content>
        </Contents>
      </EezyBox>
      <MemoBox>
        <MemoInput type="text" placeholder="Add memo..." readOnly />
      </MemoBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 9px 14px;
`;
const EezyBox = styled.div`
  padding: 12px 18px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;

  border: 1px solid #d7d7d7;
  border-radius: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  & > span {
    ${(props) => props.theme.typography.title};
    color: #000000;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow-y: scroll;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  & > span,
  div {
    ${(props) => props.theme.typography.h2};
    color: #484848;
    font-weight: 500;
  }
  & > div {
    padding: 0px 0px 0px 16px;
    border-left: 5px solid #fa99b3;
    ${(props) => props.theme.typography.h2};
    color: #000000;
    line-height: 150%;
  }
`;

const MemoBox = styled.div`
  border: 1px solid #d7d7d7;
  border-radius: 14px;
  background-color: #ffffff;
  padding: 12px 18px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  margin-top: 9px;
`;

const MemoInput = styled.textarea`
  height: 48px;
  border: none;
  background-color: transparent;
  ${(props) => props.theme.typography.h2};
  color: #000000;
  &::placeholder {
    color: rgba(0, 0, 0, 0.45);
  }
  &:active,
  &:focus {
    outline: none;
  }
`;
