import { ButtonAdd, Navigator, CardSection, CardText } from './styles';
import React, { Component } from 'react';
import chrome from '../../images/logo-chrome.svg'
import firefox from '../../images/logo-firefox.svg'
import opera from '../../images/logo-opera.svg'
import line from '../../images/bg-dots.svg'
import { Col, Container } from 'react-bootstrap';
import  Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import { RowCenter } from '../../global';


class Downloads extends Component {
        render() {
            return (
                <div>
                    <Container>
                    <RowCenter>
                            <CardDeck>
                            <Col>
                            <CardSection>
                                <Card.Body>
                                <Navigator variant="top" src={ chrome }></Navigator>
                               <Card.Title><h3>Add to Chrome</h3></Card.Title>
                                <CardText><span>Minimum version 62</span></CardText>
                                <a><img alt="line" src={ line }></img></a>
                                <ButtonAdd>Add & Install Extension</ButtonAdd>
                                </Card.Body>
                            </CardSection>
                            </Col>  
                            <Col>  
                            <CardSection Top="35px">
                                <Card.Body>
                                <Navigator variant="top" src={ firefox }></Navigator>
                               <Card.Title><h3>Add to Firefox</h3></Card.Title>
                                <CardText><span>Minimum version 55</span></CardText>
                                <a><img alt="line" src={ line }></img></a>
                                <ButtonAdd>Add & Install Extension</ButtonAdd>
                                </Card.Body>
                            </CardSection>
                            </Col>
                            <Col>
                            <CardSection Top="70px">
                                <Card.Body>
                                <Navigator variant="top" src={ opera }></Navigator>
                               <Card.Title><h3>Add to Opera</h3></Card.Title>
                                <CardText><span>Minimum version 46</span></CardText>
                                <a><img  alt="line" src={ line }></img></a>
                                <ButtonAdd>Add & Install Extension</ButtonAdd>
                                </Card.Body>
                            </CardSection>
                            </Col>
                            </CardDeck>
                  </RowCenter>
                  </Container>
    </div>
               
              );
        }
    }
    
export default Downloads;

