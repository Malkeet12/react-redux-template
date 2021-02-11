import React from "react";
import "./index.scss";

const Select = (props) => {
  let className = "custom-select-container",
    {
      onChange,
      label,
      value,
      noBorder,
      optionsList = [],
      autoSelect,
      placeholder,
      disabled,
    } = props,
    _renderOptions = () => {
      const options = optionsList.map((option, idx) => {
        let { value: val, name } = option;
        return (
          <option key={idx} value={val}>
            {name}
          </option>
        );
      });
      if (!autoSelect)
        options.unshift(
          <option key={-1} value={""} disabled selected>
            {placeholder || "Please select"}
          </option>
        );
      return options;
    };

  let addClass = (classToAdd) => {
    className += " " + classToAdd;
  };

  if (props.className) {
    addClass(props.className);
  }

  if (noBorder) addClass("no-border");

  return (
    // task add icon on right: https://projects.invisionapp.com/d/main?origin=v7#/console/18575444/386557258/preview
    <div className={className} data-layout={"column"}>
      <div className={"select-label"}>{label}</div>
      <select value={value} onChange={onChange} disabled={disabled}>
        {_renderOptions()}
      </select>
    </div>
  );
};

export default Select;
