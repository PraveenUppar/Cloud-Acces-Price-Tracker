import React from "react";

const View = (props) => {
  return (
    <div className="input-group">
      <div className="display-value">
        <div className="value-label">Total Users</div>
        <div className="value-text">
          {props.total_users.toLocaleString()} <span className="value-unit">Users</span>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit Users
      </button>
    </div>
  );
};

export default View;
