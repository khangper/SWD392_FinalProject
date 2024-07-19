import React, { useState } from 'react'
import './LectureTabs.css'
const LectureTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="lecture-tab-buttons">
        {children.map((tab, index) => (
          <button
            key={index}
            className={`lecture-tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="lecture-tab-content">{children[activeTab]}</div>
    </div>
  );
};
const LectureTab = ({ children }) => {
  return <div>{children}</div>;
};

export {LectureTabs, LectureTab};