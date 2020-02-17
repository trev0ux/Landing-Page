import { TextSection, ColText } from '../styles';
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';



class Line extends Component {
        render() {
            return (
                <div>
                    <Container>
                        <Row>
                            <ColText>
                            <TextSection>
                                <h1>Features</h1>
                        <p>Our aim is to make it quick and easy for you to access your favourite websites. 
                            Your bookmarks sync between your devices so you can access them on the go.</p>
                                </TextSection>
                            </ColText>
                        </Row>
                    </Container>
    </div>
               
              );
        }
    }
    
export default Line;