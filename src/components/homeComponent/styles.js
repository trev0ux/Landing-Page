import styled from 'styled-components';



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

export const Rectangle = styled.img`
    position: relative;
    left: 140px;
    z-index: -9;
    top: -119px;
`;

