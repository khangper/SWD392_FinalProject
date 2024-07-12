import React, { useRef } from "react";
import "./LiveOutput.css";
import avatar from "../../assets/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";

const LiveOutput = () => {
  const message = [
    {
      id: 1,
      username: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius voluptatibus provident",
    },
    {
      id: 2,
      username: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius voluptatibus provident",
    },
    {
      id: 3,
      username: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius voluptatibus provident",
    },
    {
      id: 4,
      username: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius voluptatibus provident",
    },
    {
      id: 5,
      username: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius voluptatibus provident",
    },
    {
      id: 6,
      username: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius voluptatibus provident",
    },
    {
      id: 7,
      username: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius voluptatibus provident",
    },
  ];

  const liveStreams = [
    {
      id: 1,
      name: "John Doe",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
    },
    {
      id: 2,
      name: "Jassica",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
    },
    {
      id: 3,
      name: "Edutut+",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
    },
    {
      id: 4,
      name: "Joginder Singh",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg",
    },
    {
      id: 5,
      name: "Zoena",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg",
    },
    {
      id: 6,
      name: "Albert Dua",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
    },
    {
      id: 7,
      name: "Amritpal",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
    },
    {
      id: 8,
      name: "Jimmy",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg",
    },
  ];

  const liveStreamRef = useRef(null);
  const scrollLeftLiveStream = () => {
    liveStreamRef.current.scrollBy({ left: -198, behavior: "smooth" });
  };
  const scrollRightLiveStream = () => {
    liveStreamRef.current.scrollBy({ left: 198, behavior: "smooth" });
  };
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
                {message.map((message) => (
                  <div key={message.id} className="liveoutput-chat-message">
                    <div className="liveoutput-chat-user">
                      <div className="liveoutput-username">
                        {message.username}
                      </div>
                      <div className="liveoutput-content">
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
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

            <div className="liveoutput-live-stream-container">
              <button
                className="liveoutput-scroll-buttons left"
                onClick={scrollLeftLiveStream}
              ></button>
              <div className="liveoutput-live-stream" ref={liveStreamRef}>
                {liveStreams.map((stream) => (
                  <div key={stream.id} className="liveoutput-stream-cards">
                    <Link
                      to={PATH_NAME.LIVE_OUTPUT}
                      className="liveoutput-stream-links"
                    >
                      <img src={stream.imgSrc} alt={stream.name} />
                      <h4>{stream.name}</h4>
                      <p>
                        live
                        <span></span>
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
              <button
                className="liveoutput-scroll-buttons right"
                onClick={scrollRightLiveStream}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveOutput;
