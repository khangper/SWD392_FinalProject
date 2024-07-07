import React, { useState } from "react";
import "./Analytics.css";
import analyticsIcon from "../../assets/chart.png";
import BarChart from "./chartComponent/BarChart";
import LineChart from "./chartComponent/LineChart";
import OrangeLineChart from "./chartComponent/OrangeLineChart";
import MiddleLineChart from "./chartComponent/MiddleLineChart";
import Tabs from "./chartComponent/Tabs/Tabs";
import ActivityChart from "./chartComponent/ActivityChart";
import BarChart2 from "./chartComponent/BarChart2";
const Analytics = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="analytics-container">
      <section className="top-chart-section">
        <div className="top-chart-header">
          <h2 className="top-chart-title">
            <img src={analyticsIcon} />
            Analytics
          </h2>
        </div>
        <div className="top-chart-container">
          <div className="top-chart-item">
            <div className="analytics-card">
              <div className="analytics-card-body">
                <h2>839</h2>
                <p>Subcribers</p>
                <div className="chartjs-wrapper">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
          <div className="top-chart-item">
            <div className="analytics-card">
              <div className="analytics-card-body">
                <h2>950</h2>
                <p>Weekly Visitors</p>
                <div className="chartjs-wrapper">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
          <div className="top-chart-item">
            <div className="analytics-card">
              <div className="analytics-card-body">
                <h2>20</h2>
                <p>Weekly Sales</p>
                <div className="chartjs-wrapper">
                  <OrangeLineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="middle-chart-section">
        <div className="middle-chart-container">
          <div className="middle-chart-header">
            <h2 className="middle-chart-title">Sale of the Years</h2>
          </div>
          <div className="middle-chart-body">
            <MiddleLineChart />
          </div>
        </div>
        <div className="middle2-chart-container">
          <div className="middle-chart-left">
            <div className="middle-chart-header">
              <h2 className="middle-chart-title">User Activity</h2>
            </div>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <ActivityChart activeIndex={activeTab} />
            <div className="middle-chart-left-footer">
              <a href="#">Audience Overview</a>
            </div>
          </div>
          <div className="middle-chart-right">
          <div className="middle-chart-header">
              <h2 className="middle-chart-title">Current Users</h2>
            </div>
            <div className="middle-chart-right-content">
                <p>Ave Page views per minute</p>
                <h4>09</h4>
            </div>
            <div className="middle-chart-right-content-divider"></div>
            <div className="middle-chart-right-wrapper">
                <BarChart2/>
            </div>
            <div className="middle-chart-left-footer">
              <a href="#">Audience Overview</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-chart-section">
  <table className="course-table">
    <thead>
      <tr>
        <th>Item No.</th>
        <th>Thumbnail</th>
        <th>Title</th>
        <th>Purchases</th>
        <th>Comments</th>
        <th>Views</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td><img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg" alt="Thumbnail 1" className="bottom-chart-thumbnail-img" /></td>
        <td>Course Title Here</td>
        <td>70</td>
        <td>1150</td>
        <td>1850</td>
      </tr>
      <tr>
        <td>002</td>
        <td><img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-3.jpg" alt="Thumbnail 2" className="bottom-chart-thumbnail-img" /></td>
        <td>Course Title Here</td>
        <td>86</td>
        <td>2150</td>
        <td>6850</td>
      </tr>
    </tbody>
  </table>
</section>

    </div>
  );
};

export default Analytics;
