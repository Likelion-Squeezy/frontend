import styled from "styled-components";
// img import
import Logo from "@assets/icon/icon-logo--img.svg?react";
import Eezy from "@assets/icon/icon-eezy--small.svg?react";
import { useNavigate } from "react-router-dom";

export const EezyPage = () => {
  const navigate = useNavigate();

  const handleEezyClick = () => {
    navigate("/eezy/eezying");
  };

  return (
    <Container>
      <Header>
        <ProfileCircle>
          <Logo width={20} height={20} />
        </ProfileCircle>
        <span>Do you wanna eezy current tabs?</span>
      </Header>
      <SqueezeButtonContainer>
        <SqueezeButton onClick={handleEezyClick}>
          <Eezy width={42} height={42} />
          <div>
            <span>eezy</span>
            <span>summarize this page</span>
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

  border: 1px solid #f485a3;
  border-radius: 18px;
  background-color: ${(props) => props.theme.color.pink.default};

  // active color
  &:hover {
    background-color: ${(props) => props.theme.color.pink.hover};
  }
  &:active {
    background-color: ${(props) => props.theme.color.pink.pressed};
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
