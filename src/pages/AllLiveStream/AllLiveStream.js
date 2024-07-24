import React, { useEffect } from "react";
import "./AllLiveStream.css";
import Kayak from "../../assets/kayak.png";
import { Link, useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
import { useDispatch, useSelector } from "react-redux";
import { fetchStreamsRequest } from "../../redux/reduxActions/liveStreamAction";

export default function AllLiveStream() {
  const dispatch = useDispatch();
  const { streams, loading, error } = useSelector((state) => state.streams);
  const navigate = useNavigate();

  const handleLiveStreamClick = (id) => {
    navigate(`${PATH_NAME.LIVE_OUTPUT.replace(":id", id)}`, { replace: true });
  };

  useEffect(() => {
    dispatch(fetchStreamsRequest());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="sa4d25">
        <div className="ALL-Live-container-fluid">
          <div className="ALL-Live-grid-container">
            <div className="main-content">
              <div className="section3125">
                <h4 className="item_title">All Live Streams</h4>
                {error && <p>Error: {error}</p>}
                <div className="la5lo1">
                  <div className="AllLive-grid-row">
                    {streams.map((stream, index) => (
                      <div
                        className="grid-item"
                        key={index}
                        onClick={() => handleLiveStreamClick(stream.id)}
                      >
                        <div className="stream_1 mb-4">
                          <Link
                            to={PATH_NAME.LIVE_OUTPUT}
                            className="stream_bg"
                          >
                            <img src={stream.img} alt={stream.name} />
                            <h4>{stream.name}</h4>
                            <p>
                              live<span></span>
                            </p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="side-content">
              <div className="right_side">
                <div className="fcrse_3">
                  <div className="cater_ttle">
                    <h4>Live Streaming</h4>
                  </div>
                  <div className="live_text">
                    <div className="live_icon">
                      <img src={Kayak} alt="Live Icon" />
                    </div>
                    <div className="live-content">
                      <p>
                        Set up your channel and stream live to your students
                      </p>
                      <Link to={PATH_NAME.ADD_LIVE_STREAM}>
                        <button className="live_link">Get Started</button>
                      </Link>
                      <span className="livinfo">
                        Info: This feature is only for 'Instructors'.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
