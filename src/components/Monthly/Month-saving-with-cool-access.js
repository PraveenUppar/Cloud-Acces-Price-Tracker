import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const monthly_hours = 730;
const cool_rates = 0.0001;
const standard_region_rates = 0.0001;
const standard_network_rates = 0.02;

let hot_hours;
let cool_hours;
let Month_12_Store_cool;
let Month_1_part_1;
let Month_1_part_2;
let Standard_month_1_cost;
let Cool_const_Month_1;
let Total_Network;
let Retrieve_Cost;
let Month_2_store_cool;
let standard_cool_month_2;
let Month_2_cool_cost;
let Total_Cost_Month;
let Without_cool;
let Total_saving;
let monthly_saving;
let year_1;
let year_2;
let year_3;
let year_4;

const MonthSavingCool = () => {
  const { data_size, days_cool, data_retrieve, cool_percent, region } =
    useContext(AppContext);

  const standard_rates = () => {
    if (region == "India") {
      return 0.000223;
    } else if (region == "Australia") {
      return 0.000292;
    } else {
      return 0.000202;
    }
  };

  // Calculating Hot Hours
  hot_hours = (days_cool * 24) % monthly_hours;

  // Calculating Cool Hours
  cool_hours = monthly_hours - hot_hours;

  // Calculating Month-12 Store_cool
  Month_12_Store_cool = data_size * 1024 * (cool_percent / 100);

  // Calculating Month_1_part_1
  Month_1_part_1 = data_size * 1024 * standard_region_rates * hot_hours;

  // Calculating Month_1_part_2
  Month_1_part_2 =
    (data_size * 1024 - Month_12_Store_cool) *
    standard_region_rates *
    cool_hours;

  // Calculating Standard Month_1 cost
  Standard_month_1_cost = Month_1_part_1 + Month_1_part_2;

  // Calculating Cool_const_Month_1
  Cool_const_Month_1 = Month_1_part_2 * cool_rates * cool_hours;

  // Total Network
  Total_Network = (
    data_size *
    1024 *
    (cool_percent / 100) *
    standard_network_rates
  ).toFixed(2);

  // Retrieve Cost   ////// ALSO USED IN CALCULATION
  Retrieve_Cost =
    data_size * 1024 * (cool_percent / 100) * (data_retrieve / 100) * 0.024;

  // Month_2_store_cool
  Month_2_store_cool =
    data_size * 1024 * (cool_percent / 100) -
    data_size * 1024 * (cool_percent / 100) * (data_retrieve / 100);

  // Month_2_standard_cool   ///// ALSO USED IN CALCULATION
  standard_cool_month_2 = Math.abs(
    (data_size * 1024 - Month_2_store_cool) *
      standard_rates(region) *
      monthly_hours
  );

  // Month_2_cool_cost   ///// ALSO USED IN CALCULATION
  Month_2_cool_cost = Month_2_store_cool * cool_rates * monthly_hours;

  // Total_Cost_Month
  Total_Cost_Month = Month_2_store_cool + Month_2_cool_cost + Total_Network;

  // Without_cool
  Without_cool = Math.abs(
    data_size * monthly_hours * standard_rates(region) * 1024
  ).toFixed(2);

  // Total_saving
  Total_saving = (
    standard_cool_month_2 +
    Month_2_cool_cost +
    Retrieve_Cost
  ).toFixed(2);

  // Monthly Saving
  monthly_saving = (Without_cool - Total_saving).toFixed(2);

  // Year Calculations
  year_1 = (monthly_saving * 12).toFixed(2);
  year_2 = (monthly_saving * 24).toFixed(2);
  year_3 = (monthly_saving * 36).toFixed(2);
  year_4 = (monthly_saving * 48).toFixed(2);

  // Region calculation

  return (
    <div>
      <h2 className="results-title">Cost Analysis & Savings</h2>
      
      <div className="savings-grid">
        <div className="savings-card">
          <div className="savings-amount">${monthly_saving}</div>
          <div className="savings-label">Monthly Savings</div>
        </div>
      </div>
      
      <div className="cost-comparison">
        <div className="cost-item">
          <div className="cost-amount cost-without">${Without_cool}</div>
          <div className="cost-label">Without Cool Access</div>
        </div>
        <div className="cost-item">
          <div className="cost-amount cost-with">${Total_saving}</div>
          <div className="cost-label">With Cool Access</div>
        </div>
      </div>
      
      <div className="cost-comparison">
        <div className="cost-item">
          <div className="cost-amount">${standard_cool_month_2}</div>
          <div className="cost-label">Hot Storage Cost</div>
        </div>
        <div className="cost-item">
          <div className="cost-amount">${Month_2_cool_cost}</div>
          <div className="cost-label">Cool Storage Cost</div>
        </div>
        <div className="cost-item">
          <div className="cost-amount">${Retrieve_Cost}</div>
          <div className="cost-label">Network Cost</div>
        </div>
      </div>
      
      <div className="savings-grid">
        <div className="savings-card">
          <div className="savings-amount">${year_1}</div>
          <div className="savings-label">Year 1 Savings</div>
        </div>
        <div className="savings-card">
          <div className="savings-amount">${year_2}</div>
          <div className="savings-label">Year 2 Savings</div>
        </div>
        <div className="savings-card">
          <div className="savings-amount">${year_3}</div>
          <div className="savings-label">Year 3 Savings</div>
        </div>
        <div className="savings-card">
          <div className="savings-amount">${year_4}</div>
          <div className="savings-label">Year 4 Savings</div>
        </div>
      </div>
    </div>
  );
};

export default MonthSavingCool;
