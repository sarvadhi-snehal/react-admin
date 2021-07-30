import React from "react";
import Summary from "../Components/Minimal/Summary/Summary";
import ChartSection from "../Components/Minimal/ChartSection/ChartSection";
import Overview from "../Components/Minimal/Overview/Overview";

import TodoChat from "../Components/Minimal/TodoChat/TodoChat";
import Footer from "../Components/Footer/Footer";
function Minimal() {
  return (
    <div className="container-fluid flex-wrap flex-view flex-column ">
      <Summary />
      <ChartSection />
      {/* <Overview />
      <ChartSection />
      <TodoChat />
      <Footer /> */}
    </div>
  );
}

export default Minimal;
