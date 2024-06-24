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
    <section className="frame-wrapper">
      <div className="frame-parent">
        <div className="frame-container">
          <div className="frame-group">
            <div className="header-parent">
              <iframe
                className="header"
                src="https://www.youtube.com/embed/Ohe_JzKksvA"
                title='What is a "Good Font"?'
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="streamer-info">
                <div className="streamer-details">
                  <img src={avatar} alt="" className="img-avatar" />
                  <div className="streamer-name">
                    <div className="heading-4">Jassica William</div>
                    <button className="button">
                      <p className="subscribe">Subscribe</p>
                    </button>
                  </div>
                </div>
                <div className="streamer-actions">
                  <div className="item-link">
                    <div className="streamer-action">
                      <IoEyeOutline className="icon-1" />
                    </div>
                    <div className="empty-action">1452</div>
                  </div>

                  <div className="item-link">
                    <div className="streamer-action">
                      <AiOutlineLike className="icon-1" />
                    </div>
                    <div className="empty-action">100</div>
                  </div>

                  <div className="item-link">
                    <div className="streamer-action">
                      <AiOutlineDislike className="icon-1" />
                    </div>
                    <div className="empty-action">20</div>
                  </div>

                  <div className="item-link">
                    <div className="streamer-action">
                      <GoShareAndroid className="icon-1" />
                    </div>
                    <div className="empty-action">9</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backgroundBorder">
              <div className="horizontalBorder">
                <p className="heading-41">Live Chat</p>
              </div>
              <div className="container-1">
                <div className="chat-message">
                  <div className="chat-user">
                    <div className="username">John Doe</div>
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum eius voluptatibus provident
                    </div>
                  </div>
                </div>

                <div className="chat-message">
                  <div className="chat-user">
                    <div className="username">John Doe</div>
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum eius voluptatibus provident
                    </div>
                  </div>
                </div>

                <div className="chat-message">
                  <div className="chat-user">
                    <div className="username">John Doe</div>
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum eius voluptatibus provident
                    </div>
                  </div>
                </div>

                <div className="chat-message">
                  <div className="chat-user">
                    <div className="username">John Doe</div>
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum eius voluptatibus provident
                    </div>
                  </div>
                </div>
              </div>

              <div className="horizontalBorder1">
                <div className="input">
                  <input
                    type="text"
                    className="container1"
                    placeholder="Say Something..."
                  />
                  <button className="button-icon">
                    <CiLocationArrow1 className="icon-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="live-streams-container-wrapper">
          <div className="live-streams-container">
            <div className="live-streams-header">
              <div className="heading-42">Live Streams</div>
              <div className="see-all-link">
                <div className="see-all">See all</div>
              </div>
            </div>
            <div className="container2">
              <div className="overlay">
                <div className="link">
                  <img src={avatar} alt="" className="img-icon" />
                  <div className="stream-preview-details">
                    <div className="name">John Doe</div>
                    <div className="live-indicator-container">
                      <div className="live-indicator-inner">
                        <div className="live">live</div>
                        <div className="live-indicator-background">
                          <div className="background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="arrow-left">
                  <IoIosArrowBack />
                </button>
              </div>

              <div className="overlay">
                <div className="link">
                  <img src={avatar} alt="" className="img-icon" />
                  <div className="stream-preview-details">
                    <div className="name">John Doe</div>
                    <div className="live-indicator-container">
                      <div className="live-indicator-inner">
                        <div className="live">live</div>
                        <div className="live-indicator-background">
                          <div className="background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overlay">
                <div className="link">
                  <img src={avatar} alt="" className="img-icon" />
                  <div className="stream-preview-details">
                    <div className="name">John Doe</div>
                    <div className="live-indicator-container">
                      <div className="live-indicator-inner">
                        <div className="live">live</div>
                        <div className="live-indicator-background">
                          <div className="background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overlay">
                <div className="link">
                  <img src={avatar} alt="" className="img-icon" />
                  <div className="stream-preview-details">
                    <div className="name">John Doe</div>
                    <div className="live-indicator-container">
                      <div className="live-indicator-inner">
                        <div className="live">live</div>
                        <div className="live-indicator-background">
                          <div className="background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overlay">
                <div className="link">
                  <img src={avatar} alt="" className="img-icon" />
                  <div className="stream-preview-details">
                    <div className="name">John Doe</div>
                    <div className="live-indicator-container">
                      <div className="live-indicator-inner">
                        <div className="live">live</div>
                        <div className="live-indicator-background">
                          <div className="background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overlay">
                <div className="link">
                  <img src={avatar} alt="" className="img-icon" />
                  <div className="stream-preview-details">
                    <div className="name">John Doe</div>
                    <div className="live-indicator-container">
                      <div className="live-indicator-inner">
                        <div className="live">live</div>
                        <div className="live-indicator-background">
                          <div className="background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="arrow-right">
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
