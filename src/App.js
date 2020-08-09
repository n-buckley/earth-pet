import React from 'react';
import styled from 'styled-components';

import NavBar from './components/Navbar/Navbar'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

import NewReminders from './pages/landingPage.js';
import PetPage from './pages/petPage.js'


/*Things we still need to do 
- the actual pop up 
- check off when youve done something
- when you do something the status bar goes up 
- need to create my habits by when you click the button the specific habit is pushed to an array 
- and thenn... idk? anything else?
*/

function App() {
  return (
    <ThemeProvider theme={siteColors}>
      <NavBar></NavBar>
      <NewReminders></NewReminders>
      <PetPage></PetPage>
    </ThemeProvider>        
  );
};


export const siteColors = createMuiTheme({
  palette: {
    lightBlue: '#99e4ee',
    offWhite: '#EFEFEF',
    orange: '#FF9472',
    green: '#27632a',
    pink: '#F2709C',

  },
});

export default App;
