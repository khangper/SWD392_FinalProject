
import React, { useEffect } from "react";
import "./Message.css";
import { AiOutlineSearch } from "react-icons/ai";
import { PiWechatLogoLight } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";
import { AiOutlineEllipsis } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdBlockFlipped } from "react-icons/md";
import { PiFlagCheckered } from "react-icons/pi";
import { BsVolumeMute } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Message = () => {
  const dispatch = useDispatch();
    const { loading, messages, error } = useSelector(state => state.message);

    useEffect(() => {
        // dispatch(fetchChatMessagesRequest());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
  
  return (
    <div>
      <div className="message-section">
        <div className="message-container">
          <div className="message-label">
            <div className="message-titles">
              <div className="message-icon">
                <PiWechatLogoLight className="message-icon-msg" />
              </div>
              <h2 className="message-title">Messages</h2>
            </div>
          </div>

          <div className="m-row">
            <div className="message-box1">
              <div className="message-search">
                <div className="message-box-input-search">
                  <button className="message-button-search">
                    <AiOutlineSearch className="message-icon-search" />
                  </button>
                  <input
                    className="message-search-child"
                    type="text"
                    placeholder="Search Messages..."
                  />
                </div>
              </div>
              <div className="simplebar-content-wrapper">
                <div className="group_messages">
                  <div className="chat__message__dt active">
                    <div className="user-status">
                      <div className="user-avatar">
                        <img
                          src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                          alt=""
                        />
                        <div className="msg__badge">2</div>
                      </div>
                      <p className="user-status-title">
                        <span className="bold">John Doe</span>
                      </p>
                      <p className="user-status-text">
                        Hi! Sir, How are you. I ask you one thing please explain
                        it this video price.
                      </p>
                      <p className="user-status-time floaty">7 hours ago</p>
                    </div>
                  </div>
                  <div className="chat__message__dt">
                    <div className="user-status">
                      <div className="user-avatar">
                        <img
                          src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                          alt=""
                        />
                        <div className="msg__badge">3</div>
                      </div>
                      <p className="user-status-title">
                        <span className="bold">Kerstin Cable</span>
                      </p>
                      <p className="user-status-text">
                        Hello, I paid you video tutorial but did not play error
                        404.
                      </p>
                      <p className="user-status-time floaty">8 hours ago</p>
                    </div>
                  </div>
                  <div className="chat__message__dt">
                    <div className="user-status">
                      <div className="user-avatar">
                        <img
                          src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                          alt=""
                        />
                        <div className="msg__badge">1</div>
                      </div>
                      <p className="user-status-title">
                        <span className="bold">Jose Portilla</span>
                      </p>
                      <p className="user-status-text">
                        Thanks Sir, Such a nice video.
                      </p>
                      <p className="user-status-time floaty">15 hours ago</p>
                    </div>
                  </div>
                  <div className="chat__message__dt">
                    <div className="user-status">
                      <div className="user-avatar">
                        <img
                          src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                          alt=""
                        />
                        <div className="msg__badge">7</div>
                      </div>
                      <p className="user-status-title">
                        <span className="bold">Farhat Amin</span>
                      </p>
                      <p className="user-status-text">
                        Hi! Sir, this is a purchase key CFKX12536ERUJSKLL
                      </p>
                      <p className="user-status-time floaty">22 hours ago</p>
                    </div>
                  </div>
                  <div className="chat__message__dt">
                    <div className="user-status">
                      <div className="user-avatar">
                        <img
                          src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                          alt=""
                        />
                        <div className="msg__badge">12</div>
                      </div>
                      <p className="user-status-title">
                        <span className="bold">Kyle Pew</span>
                      </p>
                      <p className="user-status-text">
                        Pls! Upload .NET Course
                      </p>
                      <p className="user-status-time floaty">2 days ago</p>
                    </div>
                  </div>
                  <div className="chat__message__dt">
                    <div className="user-status">
                      <div className="user-avatar">
                        <img
                          src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                          alt=""
                        />
                      </div>
                      <p className="user-status-title">
                        <span className="bold">Eli Natoli</span>
                      </p>
                      <p className="user-status-text">
                        Hi Sir thank you very very much for bootstrap full
                        course.
                      </p>
                      <p className="user-status-time floaty">5 days ago</p>
                    </div>
                  </div>
                  <div className="chat__message__dt">
                    <div className="user-status">
                      <div className="user-avatar">
                        <img
                          src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                          alt=""
                        />
                        <div className="msg__badge">6</div>
                      </div>
                      <p className="user-status-title">
                        <span className="bold">Jaysen Batchelor</span>
                      </p>
                      <p className="user-status-text">Thank you! Sir</p>
                      <p className="user-status-time floaty">7 days ago</p>
                    </div>
                  </div>
                  <div className="chat__message__dt">
                    <div className="user-status">
                      <div className="user-avatar">
                        <img
                          src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                          alt=""
                        />
                        <div className="msg__badge">1</div>
                      </div>
                      <p className="user-status-title">
                        <span className="bold">Quinton Batchelor</span>
                      </p>
                      <p className="user-status-text">Hey!</p>
                      <p className="user-status-time floaty">13 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="message-chat-right">
              <div className="chat_header">
                <div className="message-user-parent">
                  <div className="message-user-status-box1">
                    <div className="user-avatar">
                      <img
                        src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="message-name-box">
                      <p className="message-user-status-title">John Doe</p>
                      <p className="message-user-status-tag-online">Online</p>
                    </div>
                  </div>
                  <div className="user-status-time floaty eps_dots eps_dots5 more_dropdown">
                    <AiOutlineEllipsis className="message-icon-ellipsis" />
                    <div className="dropdown-content">
                      <div className="message-dropdown-item">
                        <RiDeleteBin5Line className="message-icon-dropdown" />
                        <h4>Delete</h4>
                      </div>

                      <div className="message-dropdown-item">
                        <MdBlockFlipped className="message-icon-dropdown" />
                        <h4>Block</h4>
                      </div>

                      <div className="message-dropdown-item">
                        <PiFlagCheckered className="message-icon-dropdown" />
                        <h4>Report</h4>
                      </div>

                      <div className="message-dropdown-item">
                        <BsVolumeMute className="message-icon-dropdown" />
                        <h4>Mute</h4>
                      </div>

                      {/* <span>
                        <MdBlockFlipped className="message-icon-dropdown" />
                        Block
                      </span>
                      <span>
                        <PiFlagCheckered className="message-icon-dropdown" />
                        Report
                      </span>
                      <span>
                        <BsVolumeMute className="message-icon-dropdown" />
                        Mute
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="messages-line">
                <div className="message-chat">
                  <div className="message-main-message-box-ta-right">
                    <div className="message-dt">
                      <div className="message-inner-dt">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec rutrum congue leo eget malesuada. Vivamus
                          suscipit tortor eget felis porttitor.
                        </p>
                      </div>
                      <span>Sat, April 10, 1:08 PM</span>
                    </div>
                  </div>
                  <div className="main-message-box st3">
                    <div className="message-dt st3">
                      <div className="message-inner-dt">
                        <p>Cras ultricies ligula.</p>
                      </div>
                      <span>5 minutes ago</span>
                    </div>
                  </div>
                  <div className="message-main-message-box-ta-right">
                    <div className="message-dt">
                      <div className="message-inner-dt">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec rutrum congue leo eget malesuada. Vivamus
                          suscipit tortor eget felis porttitor.
                        </p>
                      </div>
                      <span>Sat, April 10, 1:08 PM</span>
                    </div>
                  </div>
                  <div className="main-message-box st3">
                    <div className="message-dt st3">
                      <div className="message-inner-dt">
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                      <span>2 minutes ago</span>
                    </div>
                  </div>
                  <div className="message-main-message-box-ta-right">
                    <div className="message-dt">
                      <div className="message-inner-dt">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec rutrum congue leo eget malesuada. Vivamus
                          suscipit tortor eget felis porttitor.
                        </p>
                      </div>
                      <span>Sat, April 10, 1:08 PM</span>
                    </div>
                  </div>
                  <div className="main-message-box st3">
                    <div className="message-dt st3">
                      <div className="message-inner-dt">
                        <p>....</p>
                      </div>
                      <span>Typing...</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-send-area">
                <form>
                  <div className="m-field">
                    <div className="m-box-send_message">
                      <div className="m-send-message">
                        <input
                          className="prompt srch_explore"
                          type="text"
                          id="chat-widget-message-text-2"
                          name="chat_widget_message_text_2"
                          placeholder="Write a message..."
                        />
                      </div>
                    </div>
                    <button className="m-send_button" type="submit">
                      <VscSend className="message-send-icon" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
