import React from 'react';
import './AllLiveStream.css';
import Kayak from '..//../assets/kayak.png';
import { Link } from 'react-router-dom';
export default function AllLiveStream() {
  return (
    <div className="wrapper">
      <div className="sa4d25">
        <div className="container-fluid">
          <div className="grid-container">
            <div className="main-content">
              <div className="section3125">
                <h4 className="item_title">All Live Streams</h4>
                <div className="la5lo1">
                  <div className="grid-row">
                    {streamData.map((stream, index) => (
                      <div className="grid-item" key={index}>
                        <div className="stream_1 mb-4">
                          <a href="/live-output" className="stream_bg">
                            <img src={stream.img} alt={stream.name} />
                            <h4>{stream.name}</h4>
                            <p>live<span></span></p>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="main-loader mt-20">
                    <div className="spinner">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
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
                      <p>Set up your channel and stream live to your students</p>
                      <Link to="/add_livestream">
                      <button className="live_link" >Get Started</button>
                      </Link>
                      
                      <span className="livinfo">Info: This feature is only for 'Instructors'.</span>
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

const streamData = [
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg", name: "John Doe" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg", name: "Jassica" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg", name: "Edututs+" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg", name: "Joginder Singh" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg", name: "Zoena" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg", name: "Albert Dua" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg", name: "Ridhima" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg", name: "Amritpal" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg", name: "Jimmy" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-11.jpg", name: "Quinton Batchelor" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-12.jpg", name: "Eli Natoli" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-13.jpg", name: "Jaysen Batchelor" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-14.jpg", name: "Farhat Amin" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-15.jpg", name: "Kyle Pew" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-16.jpg", name: "Kerstin Cable" },
  { img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-17.jpg", name: "Jose Portilla" },
];
