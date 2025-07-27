import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.capacity);
  return (
    <div className="input-group">
      <label className="input-label">Capacity per User (GB)</label>
      <input
        required="required"
        type="number"
        className="input-field"
        placeholder="Enter capacity in GB"
        min="1"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => props.handleSaveClick(value)}
      >
        Save Capacity
      </button>
    </div>
  );
};

export default Edit;
