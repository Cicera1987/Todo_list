import styled from "styled-components"

export const TaskContainer = styled.div`
    height: 900px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #f4f6f8;
    padding : 3em 2em;
`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f6f8;
`

export const ContainerLabel = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.5em;


`
export const ContainerBuscar = styled.div`
    display: flex;
    border:none;
    border-radius: 12px;
svg {
    font-size: 1.5em;
    cursor: pointer;
    background: no-repet center right;
    margin: 0.6em 0em 0em 0em;
    color: grey;
}`