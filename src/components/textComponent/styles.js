import styled from 'styled-components';
import { Text, ColCenter } from '../../global';
import { Button } from 'react-bootstrap';



export const TextSection = styled(Text)`
    text-align: center;
    width: 600px;
    top: 0;
h1{
    font-weight: 500;
    font-size: 38px;
}   
`;


export const FooterText = styled.p`
    margin-top: 15px;
    text-align: center;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    line-height: 120px;

    h4 {
        letter-spacing: 0em;
        text-transform: none;
        font-size: 34px;
        width: 35vw;

    }
`;

export const Input = styled.input`
    margin-top: 15px;
    width: 300px;
    height: 45px;
    background: #fff; 
    border-radius: 6px;
    margin-right: 15px;
`;

export const ContactDiv = styled(ColCenter)`
    margin-top: 150px;
    width: 100%;
    background-color: #5266df;
    padding: 25px 25px 30px 100px;

`;

export const ButtonContact = styled(Button)`
            width: 125px;
            height: 45px;
            color:
            #fff;
            border: 0;
            background:
            #fb5859;
            font-weight: 500;
            font-size: 16px;
`;