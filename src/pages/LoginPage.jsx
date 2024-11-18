import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    chrome.storage.local.get(["type"], (result) => {
      if (result.type === "eezy") {
        navigate("/eezy");
      } else if (result.type === "squeeze") {
        navigate("/squeeze");
      }
      chrome.storage.local.remove(["type"]);
    });
  }, [navigate]);

  return (
    <Container>
      <h1>Login Page</h1>
      <button onClick={() => navigate("/squeeze")}>preview</button>
    </Container>
  );
};

const Container = styled.div`
  // CSS 코드
`;
