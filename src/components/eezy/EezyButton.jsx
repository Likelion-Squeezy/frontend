import styled from "styled-components";

export const EezyButton = ({ text, Img, onclickFunc }) => {
  return (
    <Button onClick={() => onclickFunc()}>
      <Img />
      <span>{text}</span>
    </Button>
  );
};

const Button = styled.button`
  padding: 5px 14px;
  border: 1px solid #e8e8e8;
  border-radius: 20px;

  background-color: #fafafa;
  & > span {
    ${(props) => props.theme.typography.h3};
    color: #888888;
  }
  display: flex;
  gap: 2px;
`;
