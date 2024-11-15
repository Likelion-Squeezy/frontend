//import styled
import styled from "styled-components";
//import img
import Eezy from "@assets/icon/icon-eezy--small.svg?react";
import Edit from "@assets/icon/icon-edit.svg?react";
import Copy from "@assets/icon/icon-copy.svg?react";
import Regenerate from "@assets/icon/icon-refresh.svg?react";
import Share from "@assets/icon/icon-share.svg?react";
//import components
import { TypeAnimation } from "../common/TypeAnimation";
import { EezyButton } from "./EezyButton";

export const EezyItem = ({ isLoading = true, setLoading, data }) => {
  const subTitle = data.content ? data.content.split("\n")[0].slice(2) : undefined;
  const content = data.content
    ? data.content.split("\n").slice(2).join("\n")
    : undefined;

  return (
    <Container>
      <Header>
        <Title>
          <Eezy />
          {<TypeAnimation text={data.title} frame={50} />}
        </Title>
        <div>
          <Edit width={13} height={13} />
        </div>
      </Header>
      <Contents>
        <Content>
          {<TypeAnimation text={subTitle} frame={50} startTime={1200} />}
          <div>
            {
              <TypeAnimation
                text={content}
                frame={10}
                startTime={2000}
                setFlag={setLoading}
              />
            }
          </div>
        </Content>
      </Contents>
      {!isLoading && (
        <Buttons>
          <EezyButton text="Copy" Img={Copy} onclickFunc={() => {}} />
          <EezyButton
            text="Regenerate"
            Img={Regenerate}
            onclickFunc={() => {}}
          />
          <EezyButton text="Share" Img={Share} onclickFunc={() => {}} />
        </Buttons>
      )}
    </Container>
  );
};

const Container = styled.div`
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
  max-height: 304px;

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

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-top: 18px;
`;
