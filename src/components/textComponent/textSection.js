import { TextSection, FooterText, Input, ButtonContact, ContactDiv} from './styles';
import { Row } from 'react-bootstrap';
import React from 'react';
import { ColCenter } from '../../global';


const Paragraph = props => {
    return <p>{props.paragraph.join(" ")}</p>;
  }; 
  
  const Title = props => {
    return <h1>{props.title.join(" ")}</h1>;
  }
  

export const Line = function() {
    return (
        <div>
                <Row>
                    <ColCenter>
                    <TextSection>
                            <Title title={["Features"]}></Title>
                            <Paragraph paragraph={["Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."]}></Paragraph>
                        </TextSection>
                    </ColCenter>
                </Row>
  </div>
  
    )};
  
   export const Line2 = function() {
      return (
          <div>
                  <Row>
                      <ColCenter>
                      <TextSection>
                              <Title title={["Downloads"]}></Title>
                              <Paragraph paragraph={["  We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize." ]}></Paragraph>
                          </TextSection>
                      </ColCenter>
                  </Row>
    </div>
         
        )
      };

      export const Line3 = function() {
        return (
            <div>
                
                    <Row>
                        <ColCenter>
                        <TextSection>
                        <br/>
                        <br/>
                        <br/>
                                <Title title={["Frequently Asked Questions"]}></Title>
                                <Paragraph paragraph={[" Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us." ]}></Paragraph>
                            </TextSection>
                        </ColCenter>
                    </Row>
      </div>
           
          )
        };
      
        export const Contact = function() {
            return (
                <div>
                    
                        <ContactDiv xs={12}>
                                <FooterText>
                                35,000+ already joined
                                <h4>Stay up-to-date with what we’re doing</h4>
                                <Input></Input>
                                <ButtonContact>Contact Us</ButtonContact>
                                </FooterText>
                        </ContactDiv>
          </div>
               
              )
            };    
    
        
