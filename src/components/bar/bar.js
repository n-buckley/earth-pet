import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import ProgressBar from './progressBar.js'

import './bar.css'

const AppWrapper = styled.div`
  display: flex;
  justify-content: 200px;
`;

const ProgressBarContainer = styled.div `
  width: 300px;
  margin-top: 10vh;
`;


export default class Bar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      percentage: 20
    }
  }

  render(){
    return (
      <AppWrapper>
        <ProgressBarContainer>
            <Grid container   direction="row"   justify="center"   alignItems="center">
                <button class = 'bar' onClick = {() => this.setState({percentage: this.state.percentage + 10})}>Increase</button>
                <button class = 'bar' onClick = {() => this.setState({percentage: this.state.percentage - 10})}>Decrease</button>
            </Grid>
          
            <ProgressBar percentage = {this.state.percentage} />
            <center>
             <p class = "barP">{this.state.percentage}%</p>
            </center>
          
        </ProgressBarContainer>
      </AppWrapper>
    );
  }
}