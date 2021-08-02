import React from "react";
import Summary from "../Components/Minimal/Summary/Summary";
import ChartWeather from "../Components/Minimal/CahrtWeather/ChartWeather"
import CommetnSection from "../Components/Minimal/CommentsSection/CommetnSection"
function Minimal() {
  return (
    <div className="container-fluid flex-wrap flex-view flex-column w-100">
      <Summary/>
      <ChartWeather />
      <CommetnSection/>
    </div>
  );
}

export default Minimal;
