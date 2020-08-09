// //have the pet and "life" bar - for every completed reminder life bar increases 
// //we do have accout

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import Bar from '../components/bar/bar.js'
import cat from '../static/cat.png';
import dog from '../static/dog.png';

let pet = cat;
export default class petPage extends React.Component {
    grow = (pet) => {
        if(pet == cat){
          pet = dog;
      } else {
        pet = cat;
      }
    }
    render() {
        return (
            <div>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Bar></Bar>
                    <img src={pet} alt="Cute animal" onClick = {`${this.grow(pet)}`} width="50%" height="50%" />
                </Grid>
            </div>
        );
    }

}

