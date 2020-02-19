import { ButtonAdd, Navigator, CardSection, CardText } from '../styles';
import React, { Component } from 'react';
import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import line from '../images/bg-dots.svg'
import { Row, Col } from 'react-bootstrap';
import  Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

class Downloads extends Component {
        render() {
            return (
                <div>
                    <Row>
                        <Col>
                            <CardDeck>
                            <CardSection>
                                <Card.Body>
                                <Navigator variant="top" src={ chrome }></Navigator>
                               <Card.Title><h3>Add to Chrome</h3></Card.Title>
                                <CardText><span>Minimum version 62</span></CardText>
                                <a><img src={ line }></img></a>
                                <ButtonAdd><a>Add & Install Extension</a></ButtonAdd>
                                </Card.Body>
                            </CardSection>
                            <CardSection Top="35px">
                                <Card.Body>
                                <Navigator variant="top" src={ firefox }></Navigator>
                               <Card.Title><h3>Add to Firefox</h3></Card.Title>
                                <CardText><span>Minimum version 55</span></CardText>
                                <a><img src={ line }></img></a>
                                <ButtonAdd><a>Add & Install Extension</a></ButtonAdd>
                                </Card.Body>
                            </CardSection>
                            <CardSection Top="70px">
                                <Card.Body>
                                <Navigator variant="top" src={ opera }></Navigator>
                               <Card.Title><h3>Add to Opera</h3></Card.Title>
                                <CardText><span>Minimum version 46</span></CardText>
                                <a><img src={ line }></img></a>
                                <ButtonAdd><a>Add & Install Extension</a></ButtonAdd>
                                </Card.Body>
                            </CardSection>
                            </CardDeck>
                        </Col>    
                  </Row>
    </div>
               
              );
        }
    }
    
export default Downloads;

