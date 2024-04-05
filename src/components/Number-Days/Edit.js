import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.days_cool);
  return (
    <div className="data-container">
      <input
        required="required"
        type="number"
        className="data-input"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <br></br>
      <button
        type="button"
        className="data-save-btn"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </div>
  );
};

export default Edit;
