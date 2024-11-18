import styled from "styled-components";
import Logo from "@assets/icon/icon-logo--img.svg?react";

export const AccountPage = () => {
  return (
    <Container>
      <h1>Account Settings page is under construction</h1>
      <div style={{display : "flex", justifyContent : "center", marginTop : "50px"}}>
        <Logo width={150} height={150}/>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 9px 14px;// CSS  
  & > h1 {
    ${(props) => props.theme.typography.h1};
    color : rgba(0, 0, 0, 0.77);
    font-weight: 700;
  }
`;