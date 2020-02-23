import React from 'react';
import { LogoFooter, NavFooter, Icons } from './styles';
import logo from '../../images/logo-bookmark-white.svg';

export const Footer = () => {
    return (
        <footer>
            <NavFooter>
            <Icons>
                        <span> 
                        <i class="fa fa-facebook-square"></i>
                        </span>
                        <span>
                        <i class="fa fa-twitter"></i>
                        </span>
            </Icons>
                <ul>
                    <li>
                    <LogoFooter>
                    <img src={ logo } alt="logo"></img>
                    </LogoFooter>
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
            </NavFooter>
    </footer>
    
      );
    };

export default Footer;