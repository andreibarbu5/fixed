import * as React from "react";
const SVGComponent = (props) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1={3} y1={12} x2={21} y2={12} />
    <line x1={3} y1={6} x2={21} y2={6} />
    <line x1={3} y1={18} x2={21} y2={18} />
  </svg>
);
export default SVGComponent;