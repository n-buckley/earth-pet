// //have the pet and "life" bar - for every completed reminder life bar increases 
// //we do have accout

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import Bar from '../components/bar/bar.js'
import cat from '../static/cat.png';

let pet = cat;
export default class petPage extends React.Component {
    render() {
        return (
            <div>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Bar></Bar>
                    <img src={cat} alt="Cute animal" width="50%" height="50%" />
                </Grid>
            </div>
        );
    }

}

