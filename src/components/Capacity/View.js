import React from "react";

const View = (props) => {
  return (
    <>
      <h3 className="data-input-text">
        Capacity per User : <b>{props.capacity} gb</b>
      </h3>
      <button
        className="data-edit-button"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default View;
