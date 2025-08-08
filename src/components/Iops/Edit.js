import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.iops_per_user);
  return (
    <div className="input-group">
      <label className="input-label">IOPS per User</label>
      <input
        required="required"
        type="number"
        className="input-field"
        placeholder="Enter IOPS per user"
        min="1"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => props.handleSaveClick(value)}
      >
        Save IOPS
      </button>
    </div>
  );
};

export default Edit;
