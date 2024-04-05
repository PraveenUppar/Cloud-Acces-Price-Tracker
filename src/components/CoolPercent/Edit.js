import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.cool_percent);
  return (
    <div className="data-container">
      <input
        required="required"
        className="data-input"
        type="number"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <br></br>
      <button
        className="data-save-btn"
        type="button"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </div>
  );
};

export default Edit;
