import React from "react";

const View = (props) => {
  return (
    <div className="input-group">
      <div className="display-value">
        <div className="value-label">Cool Data Percentage</div>
        <div className="value-text">
          {props.cool_percent}<span className="value-unit">%</span>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit Percentage
      </button>
    </div>
  );
};

export default View;
