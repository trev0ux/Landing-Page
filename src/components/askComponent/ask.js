import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { TextDropdown, Dropdown } from './styles';
import { RowCenter } from '../../global';




class Asks extends Component {
    render() {
        return (
            <div>
                <RowCenter>
                    <Col xs={6}>
                        < Ask1/>
                        < Ask2/>
                        < Ask3/>
                        < Ask4/>
                    </Col>
                </RowCenter>
           </div>
          );
    }
}

class Ask1 extends Component {
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
                            <Dropdown hover={"25%"}> 
                               <span>What is Bookmark?</span>
                                <button  onClick={this.textVisibility}><i class="fa fa-chevron-up" aria-hidden="true"></i></button>
                                <TextDropdown>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                                    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                                </TextDropdown>
                           </Dropdown>  
               </div>
              );
          } else {
            return (
                <div>
                            <Dropdown> 
                               <span>What is Bookmark?</span>
                                <button onClick={this.textVisibility}><i class="fa fa-chevron-down" aria-hidden="true"></i></button>
                           </Dropdown>  
               </div>
              );
          }
        }
      }

      class Ask2 extends React.Component {
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
                        <Dropdown hover={"30%"}> 
                            <span>How can I request a new browser?</span>
                            <button onClick={this.textVisibility}><i class="fa fa-chevron-up" aria-hidden="true"></i></button>
                            <TextDropdown>
                            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                            Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                            ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                            Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                            </TextDropdown>
                        </Dropdown>  
                   </div>
                  );
              } else {
                return (
                    <div>
                                <Dropdown> 
                                   <span>How can I request a new browser?</span>
                                    <button onClick={this.textVisibility}><i class="fa fa-chevron-down" aria-hidden="true"></i></button>
                               </Dropdown>  
                   </div>
                  );
              }
            }
          }

          class Ask3 extends React.Component {
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
                            <Dropdown hover={"25%"}> 
                              <span>Is there a mobile app?</span>
                              <button onClick={this.textVisibility}><i class="fa fa-chevron-up" aria-hidden="true"></i></button>
                              <TextDropdown>
                              Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                              urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                              sollicitudin ex et ultricies bibendum.
                              </TextDropdown>
                            </Dropdown>    
                       </div>
                      );
                  } else {
                    return (
                        <div>
                                    <Dropdown> 
                                       <span>Is there a mobile app?</span>
                                        <button onClick={this.textVisibility}><i class="fa fa-chevron-down" aria-hidden="true"></i></button>
                                   </Dropdown>  
                       </div>
                      );
                  }
                }
              }

              class Ask4 extends React.Component {
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
                                <Dropdown hover={"25%"}> 
                                    <span>What about other Chromium browsers?</span>
                                    <button onClick={this.textVisibility}><i class="fa fa-chevron-up" aria-hidden="true"></i></button>
                                    <TextDropdown>
                                    Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                                    vitae neque eget nisl gravida pellentesque non ut velit.
                                    </TextDropdown>
                                </Dropdown>   
                           </div>
                          );
                      } else {
                        return (
                            <div>
                                        <Dropdown> 
                                           <span>What about other Chromium browsers?</span>
                                            <button onClick={this.textVisibility}><i class="fa fa-chevron-down" aria-hidden="true"></i></button>
                                       </Dropdown>  
                           </div>
                          );
                      }
                    }
                  }

export default Asks;
