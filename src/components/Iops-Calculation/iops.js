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
    <div className="iops-section">
      <h2 className="iops-title">IOPS Analysis & Subscription Options</h2>
      
      <div className="iops-summary">
        <div className="iops-summary-item">
          <div className="iops-value">{Total_iops_required.toLocaleString()}</div>
          <div className="iops-label">Total IOPS Required</div>
        </div>
        <div className="iops-summary-item">
          <div className="iops-value">{Total_Capacity.toLocaleString()}</div>
          <div className="iops-label">Total Capacity (GB)</div>
        </div>
      </div>
      
      <div className="subscription-grid">
        <div className="subscription-card">
          <div className="subscription-name">Standard ANF</div>
          <div className="subscription-value">{standard_ANF_Calculation.toLocaleString()} IOPS</div>
        </div>
        <div className="subscription-card">
          <div className="subscription-name">Premium ANF</div>
          <div className="subscription-value">{premium_ANF_Calculation.toLocaleString()} IOPS</div>
        </div>
        <div className="subscription-card">
          <div className="subscription-name">Ultra ANF</div>
          <div className="subscription-value">{ultra_ANF_Calculation.toLocaleString()} IOPS</div>
        </div>
        <div className="subscription-card">
          <div className="subscription-name">Azure Files</div>
          <div className="subscription-value">{azure_files_Calculation.toLocaleString()} IOPS</div>
        </div>
        <div className="subscription-card">
          <div className="subscription-name">Azure Files Premium</div>
          <div className="subscription-value">{azure_files_premium_Calculation.toLocaleString()} IOPS</div>
        </div>
      </div>
    </div>
  );
};

export default Iops;
