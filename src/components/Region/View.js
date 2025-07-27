import React from "react";

const View = (props) => {
  return (
    <div className="input-group">
      <div className="display-value">
        <div className="value-label">Selected Region</div>
        <div className="value-text">{props.region}</div>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </div>
  );
};

export default View;
