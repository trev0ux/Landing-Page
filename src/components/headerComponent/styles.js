import styled from 'styled-components';
import { Button } from 'react-bootstrap';

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

    a:hover{
        color: #d96363;
        text-decoration: none;
    }
`;