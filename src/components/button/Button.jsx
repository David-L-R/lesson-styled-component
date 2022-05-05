import styled from "styled-components";

export const Button = ({ children, color, padding, buttonType }) => {
  const StyledButton = styled.button`
    /* background-color: green; */
    background-color: #333;
    color: ${(props) => (props.color ? props.color : "white")};
    padding: ${(props) => props.padding || "10px 20px"};

    ${(p) =>
      p.buttonType === "success" &&
      `
        background-color: green;
    
    `}

    ${(p) =>
      p.buttonType === "warning" &&
      `
      background-color: yellow;
        color: #333;
    `}

    ${(p) =>
      p.buttonType === "alert" &&
      `
      background-color: red;
    
    `} /* &:hover {
      background-color: red;
    }

    &:focus {
      background-color: blue;
    }

    &:active {
      background-color: yellow;
    } */
  `;

  return (
    <StyledButton buttonType={buttonType} color={color} padding={padding}>
      {children}
    </StyledButton>
  );
};
