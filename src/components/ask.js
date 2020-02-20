import React from 'react';
import { Row } from 'react-bootstrap';
import { TextDropdown, Dropdown, ColText } from '../styles';




class Ask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dropdown: false
        };
        // change code below this line
        this.textVisibility = this.textVisibility.bind(this);
        // change code above this line
      }

      textVisibility(){
          this.setState(state => {
              if (state.dropdown === true) {
                return { dropdown: false }
              } else {
                  return { dropdown: true}
              }
          })
      }
      render (){
          if (this.state.dropdown) {
            return (
                <div>
                    <Row>
                        <ColText>
                            <Dropdown> 
                               <span>What is Bookmark?</span>
                                <button  onClick={this.textVisibility}><i class="fa fa-chevron-up" aria-hidden="true"></i></button>
                                <TextDropdown>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                                    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                                </TextDropdown>
                           </Dropdown>  
                        </ColText>
                    </Row>
               </div>
              );
          } else {
            return (
                <div>
                    <Row>
                        <ColText>
                            <Dropdown> 
                               <span>What is Bookmark?</span>
                                <button onClick={this.textVisibility}><i class="fa fa-chevron-down" aria-hidden="true"></i></button>
                           </Dropdown>  
                        </ColText>
                    </Row>
               </div>
              );
          }
        }

      }


export default Ask;