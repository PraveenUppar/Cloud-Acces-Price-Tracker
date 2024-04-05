import React, { useState, useContext } from "react";
import View from "./View";
import Edit from "./Edit";
import { AppContext } from "../../Context/AppContext";

const DataStoring = () => {
  const { iops_per_user, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "IOPS",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <Edit handleSaveClick={handleSaveClick} iops_per_user={iops_per_user} />
      ) : (
        <View handleEditClick={handleEditClick} iops_per_user={iops_per_user} />
      )}
    </div>
  );
};

export default DataStoring;
