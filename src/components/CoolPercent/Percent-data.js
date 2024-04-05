import React, { useState, useContext } from "react";
import View from "./View";
import Edit from "./Edit";
import { AppContext } from "../../Context/AppContext";

const PercentData = () => {
  const { cool_percent, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "COOL_PERCENT",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <Edit handleSaveClick={handleSaveClick} cool_percent={cool_percent} />
      ) : (
        <View handleEditClick={handleEditClick} cool_percent={cool_percent} />
      )}
    </div>
  );
};

export default PercentData;
