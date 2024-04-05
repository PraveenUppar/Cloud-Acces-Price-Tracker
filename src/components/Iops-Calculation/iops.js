import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const standard_ANF = 4;
const premium_ANF = 16;
const ultra_ANF = 32;
const azure_files = 2;
const azure_files_premium = 4;

let Total_iops_required;
let Total_Capacity;
let standard_ANF_Calculation;
let premium_ANF_Calculation;
let ultra_ANF_Calculation;
let azure_files_Calculation;
let azure_files_premium_Calculation;

const Iops = () => {
  const { iops_per_user, total_users, capacity } = useContext(AppContext);

  // Total_Capacity Calculations
  Total_Capacity = total_users * capacity;

  // Total_iops_required calculation
  Total_iops_required = iops_per_user * total_users;

  // standard_ANF_Calculation calculation
  standard_ANF_Calculation = standard_ANF * Total_Capacity;

  // premium_ANF calculation
  premium_ANF_Calculation = premium_ANF * Total_Capacity;

  // ultra_ANF calculation
  ultra_ANF_Calculation = ultra_ANF * Total_Capacity;

  // azure_files calculation
  azure_files_Calculation = azure_files * Total_Capacity;

  // azure_files_premium calculation
  azure_files_premium_Calculation = azure_files_premium * Total_Capacity;

  return (
    <div className="iops-container">
      <div className="iops-outputs2">
        <h2 className="iops-outputs">
          Total IOPS Required:{Total_iops_required}
        </h2>
        <h2 className="iops-outputs">Total Capacity:{Total_Capacity}gb</h2>
      </div>
      <div className="subscription">
        <h2>
          <div className="sub2">
            <div className="sub">
              Standard ANF : {standard_ANF_Calculation} IOPS
            </div>
            <div className="sub">
              {" "}
              Premium ANF : {premium_ANF_Calculation} IOPS
            </div>
            <div className="sub"> Ultra ANF : {ultra_ANF_Calculation} IOPS</div>
            <div className="sub">
              {" "}
              Azure files : {azure_files_Calculation} IOPS
            </div>
            <div className="sub">
              {" "}
              Azure files Premium : {azure_files_premium_Calculation} IOPS
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Iops;
