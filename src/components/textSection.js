import { TextSection, ColText } from '../styles';
import { Row } from 'react-bootstrap';
import React from 'react';


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
                    <ColText>
                    <TextSection>
                            <Title title={["Features"]}></Title>
                            <Paragraph paragraph={["Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."]}></Paragraph>
                        </TextSection>
                    </ColText>
                </Row>
  </div>
  
    )};
  
   export const Line2 = function() {
      return (
          <div>
                  <Row>
                      <ColText>
                      <TextSection>
                              <Title title={["Downloads"]}></Title>
                              <Paragraph paragraph={["  We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize." ]}></Paragraph>
                          </TextSection>
                      </ColText>
                  </Row>
    </div>
         
        )
      };
    
