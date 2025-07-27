import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.cool_percent);
  return (
    <div className="input-group">
      <label className="input-label">Cool Data Percentage (%)</label>
      <input
        required="required"
        className="input-field"
        type="number"
        placeholder="Enter percentage (0-100)"
        min="0"
        max="100"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => props.handleSaveClick(value)}
      >
        Save Percentage
      </button>
    </div>
  );
};

export default Edit;
