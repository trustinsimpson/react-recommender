import React, { Component } from 'react';
import {NavPic, NavText} from './components/Navigation';
import Content from './components/Content.js';
import './images/bcknife.jpg';
import './images/pg1.png';
import './images/bu.jpg';
import './images/paring.jpg';
import './images/upchef.jpg';
import './images/upu.jpg';
import Footer from './sections/Footer';
import Landing from './sections/Landing';
import Section1 from './sections/Section1';
import { Grid } from '@material-ui/core';

class App extends Component {
  render() {
  return (
    <Grid container direction ='column'>
      <Grid item>
        <Landing />
      </Grid>
      <Grid item>
        <Section1 />
      </Grid>
      <Grid item>
        <Footer className='align-bottom'/>
      </Grid>
    </Grid>
  );
}
}

export default App;
