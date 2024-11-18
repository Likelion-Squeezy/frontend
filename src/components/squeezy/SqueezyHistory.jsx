import styled from "styled-components";
import { SqueezyList } from "./SqueezyList";
import { useEffect, useState } from "react";

export const SqueezyHistroy = () => {
  const [history, setHistory] = useState([]);

  useEffect(() =>
    // Fetch history data
    // setHistory(data)
    {
      const fetchHistory = async () => {
        await new Promise((resolve, reject) => {
          chrome.runtime.sendMessage({ action: "profile" }, (response) => {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else resolve(response);
          });
        }).then((response) => {
          if (response.success) {
            console.log(response.data.history);
            setHistory(response.data.history);
          }
        });
      };
      fetchHistory();
    }, []);

  return (
    <Container>
      <History>{`${history ? history.length : "0"} / 200 history`}</History>
      <SqueezyList history={history} />
    </Container>
  );
};

const Container = styled.div``;

const History = styled.span`
  ${(props) => props.theme.typography.description};
  color: #484848;

  margin-top: 2px;
`;
