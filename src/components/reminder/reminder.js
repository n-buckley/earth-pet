import React from 'react'; 
import styled from 'styled-components';

import './reminder.css'



const ComponentContainer = styled.div`
    width: 63vw;
    margin-top: 5vh;
    background: linear-gradient(to left, #99e4ee, #aed581);
    border-radius: 1vw;
    margin: auto;
    margin-top: 5vh;
    display: grid;
    padding: 1vw;
    grid-template-columns: 60vw 10vw;
    grid-template-rows: auto;
    grid-template-areas:
    'reminder button';
    justify-items: center;
    color: #fff;
`;

const ReminderContainer = styled.div`
    grid-area: reminder;
    width: 60vw;
    height: 5vh;
    font-size: 3vh;
`

const ButtonContainer = styled.div`
    grid-area: button;
    width: 10vw;
    height: 5vh;
`

const myHabits = []

export function makeMine(rem){
    
} 

class reminder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      };
    }
  
    render() {
      return (
        <ComponentContainer
          className={`${this.props.className}`}
          show={this.state.open}
        >
          <ReminderContainer><div className="reminder">{this.props.reminder}</div></ReminderContainer>
          <ButtonContainer><button className="reminders">+</button></ButtonContainer>
        </ComponentContainer>
      );
    };
  };

  export default reminder;