import React from "react";
import "./index.scss";

const Button = (props) => {
  let className = "custom-btn",
    { onClick, leftIcon, rightIcon } = props;

  let addClass = (classToAdd) => {
    className += " " + classToAdd;
  };

  if (props.round) {
    addClass("round");
  }

  if (props.disabled) {
    addClass("disabled");
    onClick = null;
  }

  let renderIcon = (position) => {
    return (
      <div className={`icon ${position}`}>
        {position === "right" ? rightIcon : position === "left" ? leftIcon : ""}
      </div>
    );
  };

  return (
    <button className={className} onClick={onClick} onMouseUp={props.onMouseUp}>
      <div className="button-content">
        {leftIcon ? renderIcon("left") : ""}
        <div className={"label"}>{props.label}</div>
        {rightIcon ? renderIcon("right") : ""}
      </div>
    </button>
  );
};

export default Button;
