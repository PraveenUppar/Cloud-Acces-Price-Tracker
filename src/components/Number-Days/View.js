import React from "react";

const View = (props) => {
  return (
    <div className="input-group">
      <div className="display-value">
        <div className="value-label">Cool Storage Duration</div>
        <div className="value-text">
          {props.days_cool} <span className="value-unit">Days</span>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={props.handleEditClick}
      >
        Edit Duration
      </button>
    </div>
  );
};

export default View;
