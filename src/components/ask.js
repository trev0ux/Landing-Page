import React from 'react';
import { Row } from 'react-bootstrap';
import { Text, Dropdown, ColText } from '../styles';

export const Ask = function (){
        return (
            <div>
                <Row>
                    <ColText>
                        <Dropdown> 
                           <span>What is Bookmark?</span>
                            <a><i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                       </Dropdown>  
                    </ColText>
                </Row>
           </div>
          );
}

