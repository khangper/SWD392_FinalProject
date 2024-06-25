import React from "react";
import "./LiveOutput.css";
import avatar from "../../assets/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const LiveOutput = () => {
  return (
    <section className="liveoutput-frame-wrapper">
      <div className="liveoutput-frame-parent">
        <div className="liveoutput-frame-container">
          <div className="liveoutput-frame-group">
            <div className="liveoutput-header-parent">
              <iframe
                className="liveoutput-header"
                src="https://www.youtube.com/embed/Ohe_JzKksvA"
                title='What is a "Good Font"?'
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="liveoutput-streamer-info">
                <div className="liveoutput-streamer-details">
                  <img src={avatar} alt="" className="liveoutput-img-avatar" />
                  <div className="liveoutput-streamer-name">
                    <div className="liveoutput-heading-4">Jassica William</div>
                    <button className="liveoutput-button">
                      <p className="liveoutput-subscribe">Subscribe</p>
                    </button>
                  </div>
                </div>
                <div className="liveoutput-streamer-actions">
                  <div className="liveoutput-item-link">
                    <div className="liveoutput-streamer-action">
                      <IoEyeOutline className="liveoutput-icon-1" />
                    </div>
                    <div className="liveoutput-empty-action">1452</div>
                  </div>

                  <div className="liveoutput-item-link">
                    <div className="liveoutput-streamer-action">
                      <AiOutlineLike className="liveoutput-icon-1" />
                    </div>
                    <div className="liveoutput-empty-action">100</div>
                  </div>

                  <div className="liveoutput-item-link">
                    <div className="liveoutput-streamer-action">
                      <AiOutlineDislike className="liveoutput-icon-1" />
                    </div>
                    <div className="liveoutput-empty-action">20</div>
                  </div>

                  <div className="liveoutput-item-link">
                    <div className="liveoutput-streamer-action">
                      <GoShareAndroid className="liveoutput-icon-1" />
                    </div>
                    <div className="liveoutput-empty-action">9</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="liveoutput-backgroundBorder">
              <div className="liveoutput-horizontalBorder">
                <p className="liveoutput-heading-41">Live Chat</p>
              </div>
              <div className="liveoutput-container-1">
                <div className="liveoutput-chat-message">
                  <div className="liveoutput-chat-user">
                    <div className="liveoutput-username">John Doe</div>
                    <div className="liveoutput-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum eius voluptatibus provident
                    </div>
                  </div>
                </div>

                <div className="liveoutput-chat-message">
                  <div className="liveoutput-chat-user">
                    <div className="liveoutput-username">John Doe</div>
                    <div className="liveoutput-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum eius voluptatibus provident
                    </div>
                  </div>
                </div>

                <div className="liveoutput-chat-message">
                  <div className="liveoutput-chat-user">
                    <div className="liveoutput-username">John Doe</div>
                    <div className="liveoutput-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum eius voluptatibus provident
                    </div>
                  </div>
                </div>

                <div className="liveoutput-chat-message">
                  <div className="liveoutput-chat-user">
                    <div className="liveoutput-username">John Doe</div>
                    <div className="liveoutput-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum eius voluptatibus provident
                    </div>
                  </div>
                </div>
              </div>

              <div className="liveoutput-horizontalBorder1">
                <div className="liveoutput-input">
                  <input
                    type="text"
                    className="liveoutput-container1"
                    placeholder="Say Something..."
                  />
                  <button className="liveoutput-button-icon">
                    <CiLocationArrow1 className="liveoutput-icon-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="liveoutput-live-streams-container-wrapper">
          <div className="liveoutput-live-streams-container">
            <div className="liveoutput-live-streams-header">
              <div className="liveoutput-heading-42">Live Streams</div>
              <div className="liveoutput-see-all-link">
                <div className="liveoutput-see-all">See all</div>
              </div>
            </div>
            <div className="liveoutput-container2">
              <div className="liveoutput-overlay">
                <div className="liveoutput-link">
                  <img src={avatar} alt="" className="liveoutput-img-icon" />
                  <div className="liveoutput-stream-preview-details">
                    <div className="liveoutput-name">John Doe</div>
                    <div className="liveoutput-live-indicator-container">
                      <div className="liveoutput-live-indicator-inner">
                        <div className="liveoutput-live">live</div>
                        <div className="liveoutput-live-indicator-background">
                          <div className="liveoutput-background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="liveoutput-arrow-left">
                  <IoIosArrowBack />
                </button>
              </div>

              <div className="liveoutput-overlay">
                <div className="liveoutput-link">
                  <img src={avatar} alt="" className="liveoutput-img-icon" />
                  <div className="liveoutput-stream-preview-details">
                    <div className="liveoutput-name">John Doe</div>
                    <div className="liveoutput-live-indicator-container">
                      <div className="liveoutput-live-indicator-inner">
                        <div className="liveoutput-live">live</div>
                        <div className="liveoutput-live-indicator-background">
                          <div className="liveoutput-background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="liveoutput-overlay">
                <div className="liveoutput-link">
                  <img src={avatar} alt="" className="liveoutput-img-icon" />
                  <div className="liveoutput-stream-preview-details">
                    <div className="liveoutput-name">John Doe</div>
                    <div className="liveoutput-live-indicator-container">
                      <div className="liveoutput-live-indicator-inner">
                        <div className="liveoutput-live">live</div>
                        <div className="liveoutput-live-indicator-background">
                          <div className="liveoutput-background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="liveoutput-overlay">
                <div className="liveoutput-link">
                  <img src={avatar} alt="" className="liveoutput-img-icon" />
                  <div className="liveoutput-stream-preview-details">
                    <div className="liveoutput-name">John Doe</div>
                    <div className="liveoutput-live-indicator-container">
                      <div className="liveoutput-live-indicator-inner">
                        <div className="liveoutput-live">live</div>
                        <div className="liveoutput-live-indicator-background">
                          <div className="liveoutput-background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="liveoutput-overlay">
                <div className="liveoutput-link">
                  <img src={avatar} alt="" className="liveoutput-img-icon" />
                  <div className="liveoutput-stream-preview-details">
                    <div className="liveoutput-name">John Doe</div>
                    <div className="liveoutput-live-indicator-container">
                      <div className="liveoutput-live-indicator-inner">
                        <div className="liveoutput-live">live</div>
                        <div className="liveoutput-live-indicator-background">
                          <div className="liveoutput-background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="liveoutput-arrow-right">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveOutput;
