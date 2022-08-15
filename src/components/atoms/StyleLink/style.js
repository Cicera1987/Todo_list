import styled from "styled-components";
import {Link} from 'react-router-dom'

export const StyleLink = styled(Link)`
    text-decoration: none;
    border: none;
    color: #fff;
    transition: 0.4s;
    font-size: 1em;
    font-family: "Montserrat", sans-seri;

&:hover{
color: #B0C4DE;
}
`