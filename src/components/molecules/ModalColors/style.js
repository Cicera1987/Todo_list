import styled from "styled-components"


export const CardHeader = styled.div`
    margin-top: 0.3em;
    margin-bottom: 0.1em;
    max-width: 100%;
    height: 20%;
    padding: 0.3em !important;
    text-align: center;
    border-radius:10px;
    background-color: #ADD8E6;
`

export const CardContainer = styled.div`
    height: 300px;
    width: 300px;
    box-shadow: 0px 3px 50px #A5A5A5;
`

export const CardWrapper = styled.div`
    width: 270px; 
    height: 210px; 
    box-shadow: 0px 3px 50px #A5A5A5;
    display: flex;
    flex-direction: column;
    margin: 0.2em;
`
export const TaskHolder = styled.div`
    width: 100%;
    height: 200px;
    padding: 1em 1em;
    display : flex;
    flex-direction: column;
    position: relative;
`

export const CardTop = styled.div`
    background-color: #1E90FF;
    padding: 0.2em !important;
    width: 100%;
`
export const CardText = styled.p`
    font-size: 1rem;
    margim: 0.3em;
`
export const CardIcon = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: flex-end;
    bottom:0.5em ;
    
svg {
    cursor: pointer;
    font-size: 1rem;
    color: DodgerBlue;

}

`
export const CardSelect = styled.div`
    margin-top: 0.5em;
    margin-bottom: 1.5em;
    max-width: 50%;
    height: 20%;
    padding: 0.3em !important;
    text-align: center;
    border-radius:10px;
    background-color: #A9A9A9;
`