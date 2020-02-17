import React from 'react';
import { Logo } from '../../styles';
import { Nav, StyledButton } from '../../styles';
import logo from '../../images/logo-bookmark.svg';

export const Header = () => {
    return (
        <header>
            <Nav>
            <Logo>
                <img src={ logo }></img>
            </Logo>
                <ul>
                <li>
                    <StyledButton variant="outline-danger">Login</StyledButton>{' '}
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li>
                    <li>
                    <a href="#">Pricing</a>
                    </li>
                    <li>
                    <a href="#">Features</a>
                    </li> 
                </ul>
            </Nav>
    </header>
    
      );
    };

export default Header;