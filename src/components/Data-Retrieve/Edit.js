import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.data_retrieve);
  return (
    <div className="input-group">
      <label className="input-label">Retrieval Percentage (%)</label>
      <input
        required="required"
        type="number"
        className="input-field"
        placeholder="Enter retrieval percentage"
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
        Save Retrieval
      </button>
    </div>
  );
};

export default Edit;
