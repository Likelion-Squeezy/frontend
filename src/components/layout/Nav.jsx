import { useState } from "react";
import styled from "styled-components";
import Logo from "@assets/icon/icon-logo--img.svg?react";

export const Nav = ({children}) => {
  const [userName, setUserName] = useState("UserName");

  return (
    <Container>
      <NavCell>
        <LogoCircle>
          <Logo width={20} height={20} />
        </LogoCircle>
        <UserSpan>{`Hello, ${userName}!`}</UserSpan>
      </NavCell>
      {children}
    </Container>
  );
};

const Container = styled.nav`
  position: absolute;
  z-index: 10;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 12px;
  border: none;
  box-shadow: 0px 4px 14.8px rgba(0, 0, 0, 0.15);

  width: 190px;
  top: 30px;
  left: calc(100% - 200px);
  padding: 10px;

  display: flex;
  flex-direction: column;
`;

const NavCell = styled.div`
  height: 40px;
  border-radius: 10px;
  border: none;
  display: flex;
  padding: 6px;
  gap: 10px;
  align-items: center;
`;

const LogoCircle = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  border: 1px solid #d7d7d7d7;

  margin-left: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserSpan = styled.span`
  ${(props) => props.theme.typography.description};
  color: #626262;
`;
