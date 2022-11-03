import React from "react";
import "../styles/checkbox.css";

const Checkbox = ({ onChange }) => {
  return (
    <div className="check_container">
      <input
        type="checkbox"
        className="hidden"
        id="checkbox"
        onChange={onChange}
      />
      <label htmlFor="checkbox" className="checkbox"></label>
    </div>
  );
};

export default Checkbox;
