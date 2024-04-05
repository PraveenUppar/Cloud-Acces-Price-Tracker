import React, { useState, useContext } from "react";
import View from "./View";
import Edit from "./Edit";
import { AppContext } from "../../Context/AppContext";

const DataStoring = () => {
  const { total_users, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "TOTAL_USERS",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <Edit handleSaveClick={handleSaveClick} total_users={total_users} />
      ) : (
        <View handleEditClick={handleEditClick} total_users={total_users} />
      )}
    </div>
  );
};

export default DataStoring;
