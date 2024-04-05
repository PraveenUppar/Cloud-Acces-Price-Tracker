import React, { useState, useContext } from "react";
import View from "./View";
import Edit from "./Edit";
import { AppContext } from "../../Context/AppContext";

const NoOfDays = () => {
  const { days_cool, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "DAYS_COOL",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <Edit handleSaveClick={handleSaveClick} days_cool={days_cool} />
      ) : (
        <View handleEditClick={handleEditClick} days_cool={days_cool} />
      )}
    </div>
  );
};

export default NoOfDays;
