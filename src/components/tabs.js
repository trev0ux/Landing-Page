import { TextTab, RectangleLeft, Img, RowCenter, ButtonTab, TabsStyled } from '../styles';
import React, { Component } from 'react';
import { Col, Container, Row, Tab } from 'react-bootstrap';
import image from '../images/illustration-features-tab-1.svg';
import image2 from '../images/illustration-features-tab-2.svg';
import image3 from '../images/illustration-features-tab-3.svg';
import rectangle from '../images/retangle-left.svg';




class TabsSection extends Component {
        render() {
            return (
                <div>
                   <Container>
                       <RowCenter>
                           <TabsStyled defaultActiveKey="home" id="uncontrolled-tab-example">
                               <Tab eventKey="home" title="Simple Bookmarking">
                                   <Row>
                                   <Col xs={6}>
                                    <Img src={ image } Top="10%"></Img>
                                    <RectangleLeft src={ rectangle }></RectangleLeft>
                                   </Col>   
                                   <Col xs={6}>
                                        <TextTab fontSize="32px">
                                        <h1>Bookmark in one click</h1>
                                            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
                                                gives you complete control over how you manage your favourite sites.
                                            </p>
                                            <ButtonTab>More info</ButtonTab>       
                                        </TextTab>
                                   </Col> 
                                   </Row>
                               </Tab>
                               <Tab eventKey="profile" title="Speedy Searching">
                               <Row>
                                   <Col xs={6}>
                                    <Img src={ image2 } Top="10%"></Img>
                                    <RectangleLeft src={ rectangle }></RectangleLeft>
                                   </Col>   
                                   <Col xs={6}>
                                   <TextTab fontSize="32px">
                                        <h1>Intelligent search</h1>
                                            <p>  Our powerful search feature will help you find saved sites in no time at all. 
                                                 No need to trawl through all of your bookmarks.
                                            </p>
                                            <ButtonTab>More info</ButtonTab>       
                                        </TextTab>   
                                   </Col> 
                                   </Row>
                                </Tab>
                                <Tab eventKey="contact" title="Easy Sharing">
                                <Row>
                                   <Col xs={6}>
                                    <Img src={ image3 } Top="10%"></Img>
                                    <RectangleLeft src={ rectangle }></RectangleLeft>
                                   </Col>   
                                   <Col xs={6}>
                                   <TextTab fontSize="32px">
                                        <h1>  Share your bookmarks </h1>
                                            <p>  Easily share your bookmarks and collections with others. Create a shareable 
                                                 link that you can send at the click of a button.
                                            </p>
                                            <ButtonTab>More info</ButtonTab>       
                                        </TextTab>   
                                   </Col> 
                                   </Row>
                                </Tab>
                           </TabsStyled>
                       </RowCenter>
                   </Container>
                </div>
              );
        }
    }


export default TabsSection;    
