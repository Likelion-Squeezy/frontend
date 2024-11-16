import styled from "styled-components";
import { SqueezyList } from "./SqueezyList";
import { useEffect } from "react";

export const SqueezyHistroy = () => {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await new Promise((resolve, reject) => {
          chrome.runtime.sendMessage({ action: "profile" }, (response) => {
            resolve(response);
          })
        }).then((response) => {
          console.log(response);
        }).catch(error => {
          console.error("Error sending message:", error);
        });
      } catch(error) {
        console.error("Error sending message:", error);
      }
    };
    fetchProfile();
  }, [])
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
