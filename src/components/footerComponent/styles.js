import styled from 'styled-components';
import { Logo, Nav } from '../headerComponent/styles';



export const NavFooter = styled(Nav)`
    background-color: #242946;
    display: inline;
    padding-left: 100px;

    ul li{
        float:left;
        line-height: 0px;
        letter-spacing: 0.1em;
    }

    a{
        color: #fff;
    }
`;

export const Icons = styled.div`
    color: white;
    font-size: 32px;
    float: right;

    span{
        margin-left: 35px;
    }
`;


export const LogoFooter = styled(Logo)`
    margin: -25px 25px -25px 25px;
    position: initial;
`;