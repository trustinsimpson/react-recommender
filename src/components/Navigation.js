import React from "react";
import { Link } from 'react-scroll';
import styles from '../style/Navigation.module.css';

export const NavPic = (props) => {

  return (
    <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
        <div className='col'>
         <Link to={props.where} smooth duration={1000}>
           <img className={styles[props.styling]} top alt="navigation" src={props.pic} />
         </Link>
        </div>
      </div>
    </div>
  );
}

export const NavText = (props) => {
  return (
    <>
      <button href={props.where} type="button" className={"btn " + props.style}>{props.text}</button>
    </>
  );
}
