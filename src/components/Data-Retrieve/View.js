import React from "react";

const View = (props) => {
  return (
    <div className="input-group">
      <div className="display-value">
        <div className="value-label">Data Retrieval Percentage</div>
        <div className="value-text">
          {props.data_retrieve}<span className="value-unit">%</span>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit Retrieval
      </button>
    </div>
  );
};

export default View;
