import React from "react";

const View = (props) => {
  return (
    <div className="input-group">
      <div className="display-value">
        <div className="value-label">Total Data Storage</div>
        <div className="value-text">
          {props.data_size} <span className="value-unit">TB</span>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit Amount
      </button>
    </div>
  );
};

export default View;
