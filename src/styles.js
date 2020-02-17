import styled from 'styled-components';
import { Button, Col } from 'react-bootstrap';




export const StyledButton = styled(Button)`
    width: 105px;
    height: 40px;
    border: 2px solid;
    position: relative;
    top: -8px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 500; 
    font-size:14px;
    letter-spacing: 1px;
`;


export const Logo = styled.h1`
    position: absolute;
    left: 120px;
`;

export const ButtonHome = styled.button`
  display: inline-block;
  color: #5f69a4;
  font-size: 15px;
  padding: 1em 1.5em;
  border: 2px solid;
  border-color: #5f69a4;
  border-radius: 5px;
  display: block;
  background: transparent;
  position: absolute;
  font-weight: 600;
`;

export const ButtonViolet = styled(ButtonHome)`
  color: #5e616a;
  border-color: #5e616a;
  left: 40%;
`;
export const Nav = styled.nav`
    position: absolute;
    width: 100%;
    height: 90px;
    background: transparent;
    display: inline-block;
    z-index: 9999;
    padding: 32px 100px 0px 25px;

    ul li{
    text-transform: uppercase;
    font-size: 14px;
    list-style-type: none;
    margin: 20px;
    float: right;
    }

    a{
        color: #2a2f4d;
    }
`;


export const Text = styled.p`
    font-size: 20px;
    font-weight: 300;
    position: relative;
    top: 35%;
    color: #a0a1a5;
    width: 475px;

    h1 {
        font-size: 42px;
        font-weight: 550;
        color: #2a2f4d;
    }

    p {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

export const Img = styled.img`
    position: relative;
    top: 25%;
`;


export const Rectangle = styled.img`
    position: relative;
    left: 140px;
    z-index: -9;
    top: -119px;
`;

export const TextSection = styled(Text)`
    text-align: center;
    width: 600px;

h1{
    font-weight: 600;
    font-size: 38px;
}   
`;

export const ColText = styled(Col)`
    display: flex;
    justify-content: center;

`;