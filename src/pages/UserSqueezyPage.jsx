import styled from "styled-components";
import { SqueezyHistroy } from "@components/squeezy/SqueezyHistory";
import { useState } from "react";

export const UserSqueezyPage = () => {
  const [isError, setIsError] = useState(false);

  if (isError) {
    return <div>ERROR</div>;
  }
  return (
    <Container>
      <Header>Your Squeezy</Header>
      <SqueezyHistroy setIsError={setIsError} />
    </Container>
  );
};

const Container = styled.div`
  padding: 9px 14px; // content 고정 padding

  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  ${(props) => props.theme.typography.title};
  color: ${(props) => props.theme.color.black};
`;
