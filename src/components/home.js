import React, { Component } from 'react';
import image from '../images/illustration-hero.svg';
import { Container, Row, Col } from 'react-bootstrap';
import { Text } from '../styles';
import { Img } from '../styles';


class Home extends Component {
    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col xs={6}>
                    <Text>
                        <h1>A Simple Bookmark Manager</h1>
                        <p>
                        A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.  
                        </p>
                    </Text>    
                    </Col>
                    <Col xs={6}>
                    <Img src={ image }></Img>
                    </Col>
                </Row>
            </Container>
           </div>
          );
    }
}


export default Home;