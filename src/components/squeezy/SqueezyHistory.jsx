import styled from "styled-components";
import { SqueezyList } from "./SqueezyList";

export const SqueezyHistroy = () => {
  return (
    <Container>
      <History>{`0 / 50 history`}</History>
      <SqueezyList />
    </Container>
  );
};

const Container = styled.div``;

const History = styled.span`
  ${(props) => props.theme.typography.description};
  color: #484848;

  margin-top: 2px;
`;
