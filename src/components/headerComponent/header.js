import React from 'react';
import { Logo } from '../../styles';
import { Nav } from '../../styles';
import logo from '../../images/logo-bookmark.svg';
import { Button } from 'react-bootstrap';

export const Header = () => {
    return (
        <header>
            <Nav>
            <Logo>
                <img src={ logo }></img>
            </Logo>
                <ul>
                <li>
                    <Button variant="outline-danger">Login</Button>{' '}
                    </li>
                    <li>
                    <a href="#">Features</a>
                    </li>
                    <li>
                    <a href="#">Pricing</a>
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li> 
                </ul>
            </Nav>
    </header>
    
      );
    };

export default Header;