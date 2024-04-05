import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.region);
  return (
    <>
      <select
        required="required"
        className="region-select"
        type="number"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option id="Australia" value="Australia">
          Australia
        </option>
        <option id="US" value="US">
          US
        </option>
        <option id="India" value="India">
          India
        </option>
      </select>
      <br></br>
      <br></br>
      <button
        className="region-save-button"
        type="button"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default Edit;
