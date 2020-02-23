import  Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';


export const ButtonAdd = styled(Button)`
    height: 46px;
    width: 230px;
    background: #5266df;
    border: 2px solid;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.05em;
    margin-top: 12px;

    &:hover {
        color: #5266df;
        background: #fff;
        border: 2px solid;
    }
`;

export const Navigator = styled(Card.Img)`
    margin-top: 50px;
    width: 100px;
`;

export const CardSection = styled(Card)`
    width: 280px !important;
    box-shadow: 0px 11px 7px 7px
    #f4f5f9;
    border: 0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 372px;
    margin-right: 30px;
    margin-top: ${props => props.Top || "0px"};

    h3{
    margin-top: 30px;   
    font-weight: 500;
    font-size: 20px;
    color:#2a2f4d ;
    }

    a{
        position: relative;
        right: 18px;
        display: inline-block;
    }

`;

export const CardText = styled(Card.Text)`
    color:#a4a5a9;
    font-size: 16px;
    margin-bottom: 25px;
    margin-top:-5px;
`;