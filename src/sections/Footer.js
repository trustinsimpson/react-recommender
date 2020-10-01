import React from 'react';
import {NavPic} from '../components/Navigation';
import Up from '../images/arrow-white.png';

const Footer = (props) => {
  return (
    <footer id='foot'>
      <NavPic where='../sections/Landing.js' styling='top' pic={Up}/>
    </footer>
  );
};

export default Footer;
