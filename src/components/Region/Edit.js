import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.region);
  return (
    <div className="input-group">
      <label className="input-label">Choose Region</label>
      <select
        required="required"
        className="select-field"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option id="Australia" value="Australia">
          🇦🇺 Australia
        </option>
        <option id="US" value="US">
          🇺🇸 United States
        </option>
        <option id="India" value="India">
          🇮🇳 India
        </option>
      </select>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => props.handleSaveClick(value)}
      >
        Save Region
      </button>
    </div>
  );
};

export default Edit;
