import React from "react";

const View = (props) => {
  return (
    <div className="input-group">
      <div className="display-value">
        <div className="value-label">IOPS per User</div>
        <div className="value-text">
          {props.iops_per_user} <span className="value-unit">IOPS</span>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit IOPS
      </button>
    </div>
  );
};

export default View;
