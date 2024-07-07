import React from "react";
import "./Notification.css";
import notification_icon from "..//../assets/notification-icon.png";
function Notification() {
  const notifications = [
    {
      id: 1,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
      name: "Rock William",
      text: "Like Your Comment On Video",
      videoTitle: "How to create sidebar menu",
      time: "2 min ago",
    },
    {
      id: 2,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
      name: "Jassica Smith",
      text: "Added New Review In Video",
      videoTitle: "Full Stack PHP Developer",
      time: "12 min ago",
    },
    {
      id: 3,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg",
      text: "Your Membership Activated.",
      time: "20 min ago",
    },
    {
      id: 4,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg",
      text: "Your Course Approved Now.",
      courseLink: "#",
      courseTitle: "How to create sidebar menu",
      time: "20 min ago",
    },
  ];
  return (
    <div className="NotificationPage">
      <div className="NT-grid-container">
        <div className="NT-grid-item">
          <h2 className="NT-st_title">
            <img src={notification_icon} className="Edit-icon" /> Notifications
          </h2>
        </div>
      </div>
      <div className="NT-grid-container">
        <div className="NT-grid-item">
          <a href="/setting" className="NT-setting_noti">
            Notification Setting
          </a>

          <div className="NT-all_msg_bg">
            {notifications.map((notification) => (
              <div className="NT-channel_my" key={notification.id}>
                <div className="NT-profile_link">
                  <img src={notification.imgSrc} alt="" />
                  <div className="NT-pd_content">
                    {notification.name && <h6>{notification.name}</h6>}
                    <p className="NT-noti__text5">
                      {notification.text}{" "}
                      {notification.videoTitle && (
                        <strong>{notification.videoTitle}</strong>
                      )}
                      {notification.courseTitle && (
                        <>
                          Your Course Approved Now.{" "}
                          <a
                            href={notification.courseLink}
                            className="NT-crse_bl"
                          >
                            {notification.courseTitle}
                          </a>
                        </>
                      )}
                    </p>
                    <span className="NT-nm_time">{notification.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
