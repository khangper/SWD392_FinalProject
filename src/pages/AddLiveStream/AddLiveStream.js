import React, { useState } from "react";
import "./AddLiveStream.css";

export default function AddLiveStream() {
  const [activeTab, setActiveTab] = useState("add-streaming");
  // Khởi tạo useState cho các checkbox ban đầu
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);
  const [isChecked5, setIsChecked5] = useState(true);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sa4d25">
      <div className="Live-container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-lg-8 col-md-10">
            <div className="section3125 stream_tabs">
              <ul
                className="nav nav-tabs slive_tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <div
                    className={`nav-link ${
                      activeTab === "add-streaming" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("add-streaming")}
                    role="tab"
                    aria-controls="add-streaming"
                    aria-selected={activeTab === "add-streaming"}
                  >
                    Add Streaming
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className={`nav-link ${
                      activeTab === "setting" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("setting")}
                    role="tab"
                    aria-controls="setting"
                    aria-selected={activeTab === "setting"}
                  >
                    Setting
                  </div>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                {activeTab === "add-streaming" && (
                  <div
                    className="tab-pane fade show active"
                    id="add-streaming"
                    role="tabpanel"
                  >
                    <div className="add_stream_content">
                      <h4 className="strm_title">
                        Connect your live stream to the Live API
                      </h4>
                      <div className="sf475">
                        Use live-streaming software or a hardware encoder.{" "}
                        <a href="#">Learn More</a>
                      </div>
                      <div className="stm_key">
                        Preview your broadcast with a stream key or paired
                        encoder.
                      </div>
                      <div className="live_form">
                        <div className="group-form">
                          <label>Server URL*</label>
                          <div className="input-group">
                            <input
                              className="_dlor1"
                              type="text"
                              data-testid="server_url"
                              placeholder="Stream URL"
                              value="rtmps://live-api-s.edututs+.com:443/rtmp/"
                            />
                            <button
                              className="_6tf7s red-button"
                              type="button"
                              value="1"
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                        <div className="group-form">
                          <label>Persistent stream key*</label>
                          <div className="input-group">
                            <input
                              className="_dlor1"
                              type="text"
                              data-testid="server_url"
                              placeholder="Stream URL"
                              value="592030151361629?s_bl=1&s_ps=1&s_sw=065&s_vt=api-s&a=AbzB7xYk7XdnKpBf"
                            />
                            <button
                              className="_6tf7s red-button"
                              type="button"
                              value="1"
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                        <button className="_145d1">
                          <i className="uil uil-video"></i>Go Live
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "setting" && (
                  <div
                    className="tab-pane fade show active"
                    id="setting"
                    role="tabpanel"
                  >
                    <div className="add_stream_content">
                      <h4 className="strm_title1">Live Streaming Setting</h4>
                      <div className="ui toggle checkbox _1457s2">
                        <input
                          type="checkbox"
                          name="stream_ss1"
                          id="stream_ss1"
                          checked={isChecked1}
                          onChange={() => setIsChecked1(!isChecked1)}
                        />
                        <label htmlFor="stream_ss1">
                          Publish this as a continuous live video
                        </label>
                      </div>

                      <div className="ui toggle checkbox _1457s2">
                        <input
                          type="checkbox"
                          name="stream_ss2"
                          id="stream_ss2"
                          checked={isChecked2}
                          onChange={() => setIsChecked2(!isChecked2)}
                        />
                        <label htmlFor="stream_ss2">Allow embedding</label>
                      </div>

                      <div className="ui toggle checkbox _1457s2">
                        <input
                          type="checkbox"
                          name="stream_ss3"
                          id="stream_ss3"
                          checked={isChecked3}
                          onChange={() => setIsChecked3(!isChecked3)}
                        />
                        <label htmlFor="stream_ss3">
                          Unpublish after live video ends
                        </label>
                      </div>

                      <div className="ui toggle checkbox _1457s2">
                        <input
                          type="checkbox"
                          name="stream_ss4"
                          id="stream_ss4"
                          checked={isChecked4}
                          onChange={() => setIsChecked4(!isChecked4)}
                        />
                        <label htmlFor="stream_ss4">
                          Allow viewers to rewind
                        </label>
                      </div>

                      <div className="ui toggle checkbox">
                        <input
                          type="checkbox"
                          name="stream_ss5"
                          id="stream_ss5"
                          checked={isChecked5}
                          onChange={() => setIsChecked5(!isChecked5)}
                        />
                        <label htmlFor="stream_ss5">
                          End broadcast when stream ends
                        </label>
                      </div>

                      <div className="ui toggle checkbox _1457s2">
                        <input
                          type="checkbox"
                          name="stream_ss6"
                          id="stream_ss6"
                          checked={isChecked6}
                          onChange={() => setIsChecked6(!isChecked6)}
                        />
                        <label htmlFor="stream_ss6">
                          Publish as a test broadcast
                        </label>
                      </div>

                      <div className="ui toggle checkbox _1457s2">
                        <input
                          type="checkbox"
                          name="stream_ss7"
                          id="stream_ss7"
                          checked={isChecked7}
                          onChange={() => setIsChecked7(!isChecked7)}
                        />
                        <label htmlFor="stream_ss7">
                          Turn off live commentary
                        </label>
                      </div>
                      <button className="_145d1">Save changes & Go Live</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
