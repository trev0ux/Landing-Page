import styled from 'styled-components';
import { Button, Tabs } from 'react-bootstrap';
import { Text } from '../../global';



export const RectangleLeft = styled.img`
   position: relative;
    right: 42%;
    z-index: -9;
    top: -184px;
    height: 51%;
`;

export const TextTab = styled(Text)`
    margin-left: 20%;
    top: 18%;

`;

export const ButtonTab = styled(Button)`
    background: #4c60d0;
    border-color: #4c60d0;
    padding: 13px 26px 13px 26px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
`;


export const TabsStyled = styled(Tabs)`
        .nav-link{
            border: #fff;
            width: 250px;
            text-align: center;
        }
    .nav-link.active{
        color:#495057;
        background-color: #fff;
        border-bottom: #fd5b59 4px solid;
        width: 250px;
    }

    a{
        color: #2a2f4d;
    }

    a:hover{
        color: #d96363;
        text-decoration: none;
    }
`;

