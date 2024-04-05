import React, { useState, useContext } from "react";
import View from "./View";
import Edit from "./Edit";
import { AppContext } from "../../Context/AppContext";

const DataStoring = () => {
  const { data_size, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "DATA_SIZE",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <Edit handleSaveClick={handleSaveClick} data_size={data_size} />
      ) : (
        <View handleEditClick={handleEditClick} data_size={data_size} />
      )}
    </div>
  );
};

export default DataStoring;
