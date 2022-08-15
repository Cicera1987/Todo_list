import styled from "styled-components";

export const InputModal = styled.input`
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.8em 0em;
    background-color: transparent;

    &::focus{
        outline: none;
    }
    &::placeholder{
        font-family: "Montserrat", sans-serif;
        color: #aaa;
    }
`