import React, { useState, useContext } from "react";
import View from "./View";
import Edit from "./Edit";
import { AppContext } from "../../Context/AppContext";

const DataRetrieve = () => {
  const { data_retrieve, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "DATA_RETRIEVE",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <Edit handleSaveClick={handleSaveClick} data_retrieve={data_retrieve} />
      ) : (
        <View handleEditClick={handleEditClick} data_retrieve={data_retrieve} />
      )}
    </div>
  );
};

export default DataRetrieve;
