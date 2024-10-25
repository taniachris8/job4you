import React from "react";
import { Link } from "react-router-dom";
import "./Tip.css";
import Button from "../Buttons/Button";

function Tip(props) {
  return (
    <>
      <div className="tip__wrapper">
        <Link className="tip__link" to={props.path}>
          <div className="tip-image-wrapper">
            <img alt="Tip" src={props.image} className="tip-image" />
          </div>
          <h1 className="tip-title">{props.title}</h1>
          <div className="tip__info">
            <p className="tip__date">{props.date}</p>
            <div className="tip-article">
              <p className="job-article-preview">{props.articlePreview}</p>
            </div>
          </div>
          <Button variant="primary">קרא עוד</Button>
        </Link>
      </div>
    </>
  );
}

export default Tip;
