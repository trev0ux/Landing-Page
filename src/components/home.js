import React, { Component } from 'react';
import image from '../images/illustration-hero.svg';
import { Row, Col } from 'react-bootstrap';
import { Text } from '../styles';
import { Img } from '../styles';
import {  ButtonHome, ButtonViolet, Rectangle } from '../styles';
import rectangle from '../images/rectangle-bg.svg';


class Home extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={6}>
                    <Text>
                        <h1>A Simple Bookmark Manager</h1>
                        <p>
                        A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.  
                        </p>
                        <ButtonHome>  Get it on Chrome </ButtonHome>
                        <ButtonViolet>  Get it on Firefox </ButtonViolet>
                    </Text>    
                    </Col>
                    <Col xs={6}>
                    <Img src={ image }></Img>
                    <Rectangle src={ rectangle }></Rectangle>
                    </Col>
                </Row>
           </div>
          );
    }
}


export default Home;