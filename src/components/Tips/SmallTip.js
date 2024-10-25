import React from "react";
import { Link } from "react-router-dom";
import "./SmallTip.css";

function SmallTip(props) {
  return (
    <>
      <div className="small-tip__wrapper">
        <Link className="small-tip__link" to={props.path}>
          <div className="small-tip-image-wrapper">
            <img alt="SmallTip" src={props.image} className="small-tip-image" />
          </div>
          
          <div className="small-tip__info">
          <h1 className="small-tip-title">{props.title}</h1>
            <p className="small-tip__date">{props.date}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SmallTip;
