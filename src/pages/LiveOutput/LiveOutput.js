import React, { useEffect, useRef } from "react";
import "./LiveOutput.css";
import avatar from "../../assets/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
import { useDispatch, useSelector } from "react-redux";
import { fetchLiveOutputLiveStreamsRequest } from "../../redux/reduxActions/liveOutputActions/liveOutputLiveActions";
import { fetchLivestreamByIdRequest } from "../../redux/reduxActions/liveOutputActions/liveoutputLiveByIdAction";

const LiveOutput = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { live } = useSelector((state) => state.livestreamById);

  const { liveStreams } = useSelector((state) => state.live_output_livestream);

  useEffect(() => {
    dispatch(fetchLiveOutputLiveStreamsRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchLivestreamByIdRequest(id));
  }, [dispatch, id]);

  const navigate = useNavigate();
  const handleLiveStreamClick = (id) => {
    navigate(`${PATH_NAME.LIVE_OUTPUT.replace(":id", id)}`, { replace: true });
  };

  const message = [
    {
      id: 1,
      username: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet molestie leo ac pellentesque",
    },
    {
      id: 2,
      username: "Poonam",
      content:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra",
    },
    {
      id: 3,
      username: "Jass",
      content:
        "Nulla sollicitudin nec nisi at pellentesque. Cras fringilla est et sem tempor",
    },
    {
      id: 4,
      username: "Albert Smith",
      content:
        "Pellentesque ultricies risus sit amet congue euismod",
    },
    {
      id: 5,
      username: "Jassica William",
      content:
        "Nullam efficitur tristique consequat",
    },
    {
      id: 6,
      username: "Joy Dua",
      content:
        "Proin sed leo eleifend,",
    },
    {
      id: 7,
      username: "Zoena Singh",
      content:
        "Aliquam dignissim elementum sem id rutrum",
    },
    {
      id: 8,
      username: "Amritpal Singh",
      content:
        "Fusce a elit at libero sollicitudin tincidunt",
    },
    {
      id: 9,
      username: "Johnson",
      content:
        "Ut laoreet lobortis ornare,",
    },
    {
      id: 10,
      username: "Jashan",
      content:
        "Sed pretium erat eu turpis condimentum",
    },
  ];

  const liveStreamRef = useRef(null);
  const scrollLeftLiveStream = () => {
    liveStreamRef.current.scrollBy({ left: -198, behavior: "smooth" });
  };
  const scrollRightLiveStream = () => {
    liveStreamRef.current.scrollBy({ left: 198, behavior: "smooth" });
  };
  if (!live) {
    return null;
  }
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
                  <img
                    src={live.live_details.thumbnails}
                    alt=""
                    className="liveoutput-img-avatar"
                  />
                  <div className="liveoutput-streamer-name">
                    <div className="liveoutput-heading-4">{live.live_details.channelName}</div>
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
                    <div className="liveoutput-empty-action">{live.live_details.viewCount}</div>
                  </div>

                  <div className="liveoutput-item-link">
                    <div className="liveoutput-streamer-action">
                      <AiOutlineLike className="liveoutput-icon-1" />
                    </div>
                    <div className="liveoutput-empty-action">{live.live_details.likeCount}</div>
                  </div>

                  <div className="liveoutput-item-link">
                    <div className="liveoutput-streamer-action">
                      <AiOutlineDislike className="liveoutput-icon-1" />
                    </div>
                    <div className="liveoutput-empty-action">{live.live_details.dislikeCount}</div>
                  </div>

                  <div className="liveoutput-item-link">
                    <div className="liveoutput-streamer-action">
                      <GoShareAndroid className="liveoutput-icon-1" />
                    </div>
                    <div className="liveoutput-empty-action">{live.live_details.shareCount}</div>
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
              <Link to={PATH_NAME.ALL_LIVE_STREAM}>
                <div className="liveoutput-see-all-link">
                  <div className="liveoutput-see-all">See all</div>
                </div>
              </Link>
            </div>

            <div className="liveoutput-live-stream-container">
              <button
                className="liveoutput-scroll-buttons left"
                onClick={scrollLeftLiveStream}
              ></button>
              <div className="liveoutput-live-stream" ref={liveStreamRef}>
                {liveStreams.map((stream) => (
                  <div
                    key={stream.id}
                    onClick={() => handleLiveStreamClick(stream.id)}
                    className="liveoutput-stream-cards"
                  >
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
