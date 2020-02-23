import React from 'react';
import { Logo, Nav, StyledButton } from './styles';
import logo from '../../images/logo-bookmark.svg';

export const Header = () => {
    return (
        <header>
            <Nav>
            <Logo>
                <img src={ logo } alt="logo"></img>
            </Logo>
                <ul>
                <li>
                    <StyledButton variant="outline-danger">Login</StyledButton>{' '}
                    </li>
                    <li>
                    <a href="#contact">Contact</a>
                    </li>
                    <li>
                    <a href="#pricing">Pricing</a>
                    </li>
                    <li>
                    <a href="#features">Features</a>
                    </li> 
                </ul>
            </Nav>
    </header>
    
      );
    };

export default Header;