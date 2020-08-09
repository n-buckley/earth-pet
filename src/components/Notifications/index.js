import React from 'react';
import styled from 'styled-components';

import './notif.css'

const Container = styled.div`
    background-color: #444;
    color: white;
    padding: 16px;
    position: relative;
    top: ${props => props.top}px;
    z-index: 0;
    transition: top 0.5s ease;
    display: none;
    
`

function showNotification() {
        
}

export default class Notifications extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            top: -250,
        };
    }
    
    render(){
        return(
            <React.Fragment>
                <button onClick={this.showNotification}>Click me</button>
             <Container className="hidden">Example text</Container>
                {/* <Container top = {this.state.top}>Example text</Container> */}
            </React.Fragment>
        );
    }
}