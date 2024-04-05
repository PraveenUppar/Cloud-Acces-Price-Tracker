import React, { useState, useContext } from "react";
import View from "./View";
import Edit from "./Edit";
import { AppContext } from "../../Context/AppContext";

const Region = () => {
  const { region, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "REGION",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <Edit handleSaveClick={handleSaveClick} region={region} />
      ) : (
        <View handleEditClick={handleEditClick} region={region} />
      )}
    </div>
  );
};

export default Region;
