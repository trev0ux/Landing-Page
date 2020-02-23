import styled from 'styled-components';

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



export const Dropdown = styled.div`
    height: 65px;
    width: 540px;
    border-top: #dddddd 1px solid;
    font-size: 18px;
    color: #2a2f4d;
    font-weight: 400;
    margin-bottom: ${props => props.hover || "0px"};

    span{
        float: left;
        margin-top: 20px;
    }
   span:hover{
    color: #d96363;
   }

   button {
       color: #495bbf;
       float: right;
       border: 0;
       background: transparent;
       padding: 16px 5px 16px 5px;
       cursor: pointer;
   }
`;


export const TextDropdown = styled(Text)`
       font-size: 18px;
       padding: 50px 0px 50px 0px;
       width: 100%;

`; 