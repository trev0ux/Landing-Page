import styled from 'styled-components';
import { Button, Col, Row, Tabs } from 'react-bootstrap';
import  Card from 'react-bootstrap/Card';


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

export const Dropdown = styled.div`
    height: 65px;
    width: 540px;
    border-bottom: #dddddd 1px solid;
    border-top: #dddddd 1px solid;
    font-size: 18px;
    color: #2a2f4d;
    font-weight: 500;

    span{
        float: left;
        margin-top: 20px;
    }
   span:hover{
    color: #d96363;
   }

   a {
       float: right;
       margin: 20px;
   }
`;



export const CardText = styled(Card.Text)`
    color:#a4a5a9;
    font-size: 16px;
    margin-bottom: 25px;
    margin-top:-5px;
`;

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
  font-size: 16px;
  padding: .8em 1.8em;
  border: 2px solid;
  border-color: #5f69a4;
  border-radius: 5px;
  display: block;
  background: transparent;
  position: absolute;
  font-weight: 500;
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

    a:hover{
        color: #d96363;
        text-decoration: none;
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
        font-size: ${props => props.fontSize || "42px"};
        font-weight: 550;
        color: #2a2f4d;
    }

    p {
        margin-top: 30px;
        margin-bottom: 30px;
    }
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
    top: 0;
h1{
    font-weight: 500;
    font-size: 38px;
}   
`;

export const ColText = styled(Col)`
    display: flex;
    justify-content: center;

`;


export const RectangleLeft = styled.img`
   position: relative;
    right: 42%;
    z-index: -9;
    top: -184px;
    height: 51%;
`;

export const Img = styled.img`
    position: relative;
    top: ${props => props.Top || "25%"};
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

export const RowCenter = styled(Row)`
    justify-content: center;
`;