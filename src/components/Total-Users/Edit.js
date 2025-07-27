import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.total_users);
  return (
    <div className="input-group">
      <label className="input-label">Total Number of Users</label>
      <input
        required="required"
        type="number"
        className="input-field"
        placeholder="Enter total users"
        min="1"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => props.handleSaveClick(value)}
      >
        Save Users
      </button>
    </div>
  );
};

export default Edit;
