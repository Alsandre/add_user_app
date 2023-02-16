import React from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./ErrorMessage.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop} />;
};

const ErrorOverlay = (props) => {
  return (
    <Card className={classes["error-wrapper"]}>
      <header className={classes["error-header"]}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes["error-paragraph"]}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.hideError}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorMessage = (props) => {
  // let errorTextValidation =
  //   "Please enter a valid name and age (non-empty values)";
  // if (+props.age < 0) {
  //   errorTextValidation = "Please enter a valid age (>0)";
  // }

  return (
    <div id='easter-egg'>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.hideError} />,
        document.getElementById("backdrop-overlay")
      )}
      {ReactDOM.createPortal(
        <ErrorOverlay
          title={props.title}
          hideError={props.hideError}
          message={props.message}
        />,
        document.getElementById("modal-overlay")
      )}
    </div>
  );
};

export default ErrorMessage;
