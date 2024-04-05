import React from "react";
import DataStoring from "./components/Data-Storing/Data-storing";
import PercentData from "./components/CoolPercent/Percent-data";
import NumberDays from "./components/Number-Days/Number-days";
import DataRetrieved from "./components/Data-Retrieve/Data-retrieved";
import MonthlySaving from ".//components/Monthly/Monthly-saving";
import SelectRegion from "./components/Region/Select-Region";
import { AppProvider } from "./Context/AppContext";
import Iops from "./components/Iops/iops";
import TotalUsers from "./components/Total-Users/total_users";
import Capacity from "./components/Capacity/capacity";
import IopsCalculation from "./components/Iops-Calculation/Iops-main";
import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <div className="Layout">
        <h1 className="header">
          Standard Cooling Access Cost Saving and IOPS Calculator
        </h1>
        <div className="Container">
          <div className="Country">
            <SelectRegion></SelectRegion>
          </div>
          <div className="Data-store">
            <h2>Amount of Data to be Stored?</h2>
            <DataStoring></DataStoring>
          </div>
          <div className="Cool">
            <h2> Percentage of data to be considered cool?</h2>
            <PercentData></PercentData>
          </div>
          <div className="Days">
            <h2>Days should this data be considered cool? </h2>
            <NumberDays></NumberDays>
          </div>
          <div className="Retrieve">
            <h2>Percentage of cool data to be retrieved?</h2>
            <DataRetrieved></DataRetrieved>
          </div>
          <div className="IOPS">
            <h2>Number of IOPS used per User?</h2>
            <Iops></Iops>
          </div>
          <div className="Users">
            <h2>Total number of Users using IOPS?</h2>
            <TotalUsers></TotalUsers>
          </div>
          <div className="Capacity">
            <h2>Capacity per User using IOPS?</h2>
            <Capacity></Capacity>
          </div>

          <div className="Monthly-saving">
            <IopsCalculation></IopsCalculation>
          </div>
          <div className="Monthly-saving">
            <MonthlySaving></MonthlySaving>
          </div>
          <br></br>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
