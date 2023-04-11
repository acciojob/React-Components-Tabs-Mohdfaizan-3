import React from "react";
import Tab from "./Tab";

const Tabs = () => {
  return (
    <div className="tab">
      <Tab TabName="Home" />
      <Tab TabName="About" />
      <Tab TabName="Feature" />
      <div className="viewport">Pages Go Here</div>
    </div>
  );
};

export default Tabs;
