import React from "react";
import "./index.scss";

const SnackBar = (props) => {
  //type should be either success/error/info
  let { msg, type, onHide, hideTimeOut } = props,
    className = "snackbar animated slideInUp " + type;

  hideTimeOut = hideTimeOut ? hideTimeOut : 2000;

  let addClass = (classToAdd) => {
    className += " " + classToAdd;
  };

  if (props.className) {
    addClass(props.className);
  }

  setTimeout(() => {
    onHide();
  }, hideTimeOut);

  return <div className={className}>{msg}</div>;
};

export default SnackBar;
