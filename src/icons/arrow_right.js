import React from "react";

const ArrowRight = (props) => {
  let color = props.color || "#fff";
  return (
    <svg
      fill="none"
      height="12"
      viewBox="0 0 24 24"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="m20.4724 11.3135-10.2362-10.23624 1.0775-1.07749174 11.3137 11.31373174-11.3137 11.3137-1.0775-1.0775z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ArrowRight;
