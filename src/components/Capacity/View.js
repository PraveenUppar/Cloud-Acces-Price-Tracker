import React from "react";

const View = (props) => {
  return (
    <div className="input-group">
      <div className="display-value">
        <div className="value-label">Capacity per User</div>
        <div className="value-text">
          {props.capacity} <span className="value-unit">GB</span>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit Capacity
      </button>
    </div>
  );
};

export default View;
