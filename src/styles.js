import styled from 'styled-components';



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
    padding: 28px 48px 0px 25px;

    ul li{
    text-transform: uppercase;
    font-size: 16px;
    list-style-type: none;
    margin: 10px;
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
    top: 50%;
    color: #a0a1a5;
    width: 475px;

    h1 {
        font-size: 42px;
        font-weight: 550;
        color: #2a2f4d;
    }
`;

export const Img = styled.img`
    position: relative;
    top: 20%;
`;
