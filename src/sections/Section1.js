import React from 'react';
import {NavPic} from '../components/Navigation';
import Content from '../components/Content';
import Up from '../images/arrow-white.png';
import styles from '../style/Section1.module.css';


const Section1 = (props) => {
  return (
    <div className='container'>
      <div className='row' id={styles.content1}>
        <div className='col d-flex justify-content-center align-items-center'>
          <Content id='content1' text="Chef's knife" info="The chef's knife is the most important knife in your collection so don't be afraid to spend a 
          little more money on one!" b1='8" is the perfect length' b2='Comfortable grip' b3='Keep it sharp' />
        </div>
      </div>
      <div className='row' id={styles.navpic1}>
        <div className='col'>
        <NavPic where='../sections/Landing.js' styling='top' pic={Up}/>
        </div>
      </div>
    </div>
  );
}

export default Section1;
