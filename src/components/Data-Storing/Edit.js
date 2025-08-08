import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.data_size);
  return (
    <div className="input-group">
      <label className="input-label">Data Amount (TB)</label>
      <input
        required="required"
        type="number"
        className="input-field"
        placeholder="Enter data amount in TB"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => props.handleSaveClick(value)}
      >
        Save Amount
      </button>
    </div>
  );
};

export default Edit;
