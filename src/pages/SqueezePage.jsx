import styled from "styled-components";
// img import
import Logo from "@assets/icon/icon-logo--img.svg?react";
import Squeeze from "@assets/icon/icon-squeeze--small.svg?react";
import { useNavigate } from "react-router-dom";

export const SqueezePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <ProfileCircle>
          <Logo width={20} height={20} />
        </ProfileCircle>
        <span>Do you wanna squeeze current tabs?</span>
      </Header>
      <SqueezeButtonContainer>
        <SqueezeButton onClick={() => navigate("/squeeze/squeezing")}>
          <Squeeze width={42} height={42} />
          <div>
            <span>squeeze</span>
            <span>categorize current tabs</span>
          </div>
        </SqueezeButton>
      </SqueezeButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 9px 14px;
`;

const Header = styled.header`
  display: flex;
  gap: 14px;
  align-items: center;

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

const SqueezeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const SqueezeButton = styled.button`
  padding: 11px;
  display: flex;
  gap: 11px;
  align-items: center;

  border: 1px solid #ffdb2b;
  border-radius: 18px;
  background-color: ${(props) => props.theme.color.yellow.default};

  // active color
  &:hover {
    background-color: ${(props) => props.theme.color.yellow.hover};
  }
  &:active {
    background-color: ${(props) => props.theme.color.yellow.pressed};
  }
  cursor: pointer;

  //child
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;

    & > span:nth-child(1) {
      ${(props) => props.theme.typography.button};
      font-weight: 500;
      color: #111111;
    }
    & > span:nth-child(2) {
      ${(props) => props.theme.typography.description};
      color: rgba(1, 1, 1, 0.6);
    }
  }
`;
