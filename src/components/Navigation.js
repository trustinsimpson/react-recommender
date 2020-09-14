import React from "react";
import { Link } from "react-scroll";

export const NavPic = (props) => {
  return (
    <>
      <Link to={props.where}>
        <img className={props.style} alt="navigation" src={props.pic} />
      </Link>
    </>
  );
};

export const NavText = (props) => {
  return (
    <>
      <button href={props.where} type="button" className={"btn " + props.style}>{props.text}</button>
    </>
  );
};
