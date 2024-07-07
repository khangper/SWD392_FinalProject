import React from 'react';
import './Tabs.css';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="analytics-tabs-container">
      <div className="analytics-tabs">
        <button className={activeTab === 0 ? 'active' : ''} onClick={() => setActiveTab(0)}>
          <div className="analytics-tab-content">
            <h3>User</h3>
            <p>5248 <span className="increase">5% ↑</span></p>
          </div>
        </button>
        <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>
          <div className="analytics-tab-content">
            <h3>Sessions</h3>
            <p>638 <span className="increase">20% ↑</span></p>
          </div>
        </button>
        <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>
          <div className="analytics-tab-content">
            <h3>Bounce Rate</h3>
            <p>36.9% <span className="decrease">7% ↓</span></p>
          </div>
        </button>
        <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}>
          <div className="analytics-tab-content">
            <h3>Session Duration</h3>
            <p>4m 49s <span className="increase">15% ↑</span></p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Tabs;
