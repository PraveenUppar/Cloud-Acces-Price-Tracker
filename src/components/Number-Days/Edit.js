import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.days_cool);
  return (
    <div className="input-group">
      <label className="input-label">Duration (Days)</label>
      <input
        required="required"
        type="number"
        className="input-field"
        placeholder="Enter number of days"
        min="1"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save Duration
      </button>
    </div>
  );
};

export default Edit;
