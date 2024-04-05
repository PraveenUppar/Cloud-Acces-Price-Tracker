import React from "react";

const View = (props) => {
  return (
    <>
      <h2>Selected Region: {props.region} </h2>
      <button
        className="region-edit-button"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default View;
