import React from 'react'; 
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

import './reminder.css'



const ComponentContainer = styled.div`
    width: 63vw;
    margin-top: 5vh;
    background-color: #000;
    border-radius: 1vw;
    margin: auto;
    margin-top: 5vh;
    display: grid;
    padding: 1vw;
    grid-template-columns: 50vw 20vw;
    grid-template-rows: auto;
    grid-template-areas:
    'reminder button';
    justify-items: center;
    color: #fff;
`;

const ReminderContainer = styled.div`
    grid-area: reminder;
    width: 50vw;
    height: 5vh;
    font-size: 3vh;
`

const ButtonContainer = styled.div`
    grid-area: button;
    width: 20vw;
    height: 5vh;
`


class habit extends React.Component {
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
          <ReminderContainer><div className="habit">{this.props.habit}</div></ReminderContainer>
          <ButtonContainer><button>Completed</button></ButtonContainer>
        </ComponentContainer>
      );
    };
  };

  export default habit;