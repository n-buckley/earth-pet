import React from 'react';
import styled from 'styled-components'; 

import Reminder from '../components/reminder/reminder.js'



const PageContainer = styled.div`
    width: 80%;
    margin: auto;
`

export default class habitPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return(
            <div>
                <PageContainer>
                    
                </PageContainer>
            </div>
            
        
        );
    };
        
};
