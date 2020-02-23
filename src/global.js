import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap');
  }
`



export const Text = styled.p`
    font-size: 20px;
    font-weight: 300;
    position: relative;
    top: 35%;
    color: #a0a1a5;
    width: 475px;

    h1 {
        font-size: ${props => props.fontSize || "42px"};
        font-weight: 550;
        color: #2a2f4d;
    }

    p {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;


export const RowCenter = styled(Row)`
    justify-content: center;
`;

export const Img = styled.img`
    position: relative;
    top: ${props => props.Top || "25%"};
`;

export const ColCenter = styled(Col)`
    display: flex;
    justify-content: center;

`;