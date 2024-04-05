import React from "react";

const View = (props) => {
  return (
    <>
      <h3 className="data-input-text">
        {" "}
        Total No of Users : <b>{props.total_users}</b>
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
