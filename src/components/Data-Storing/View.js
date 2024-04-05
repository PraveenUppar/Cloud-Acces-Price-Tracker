import React from "react";

const View = (props) => {
  return (
    <>
      <h3 className="data-input-text">
        Total Amount of Data (Tibs): <b>{props.data_size} Tb</b>
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
