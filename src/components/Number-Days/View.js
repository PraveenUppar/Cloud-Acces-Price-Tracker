import React from "react";

const View = (props) => {
  return (
    <div className="data-container">
      <h3 className="data-input-text">
        {" "}
        No of Days : <b>{props.days_cool} Days</b>
      </h3>
      <button
        type="button"
        className="data-edit-button"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </div>
  );
};

export default View;
