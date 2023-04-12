import React, { useState } from "react";

const tabs = [{ label: "Home" }, { label: "About" }, { label: "Feature" }];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            id={`${tab.label}-tab`}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="viewport">Pages Go Here gi</div>
    </>
  );
};

export default Tabs;
