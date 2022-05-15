import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 0.8rem;
    background: transparent;
    border:0.1rem solid var(--lightOrenge); 
    border-color: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--mainDark)"};
    color: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--mainOrange)"});
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--mainOrange)"});
    color: var(--mainOrange);
    }
    &:focus {
    outline: none;
    }
`;
