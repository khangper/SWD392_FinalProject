import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotificationsStudentRequest } from "../../redux/reduxActions/NotificationActions/notificationStudentAction";
import notification_icon from "../../assets/notification-icon.png";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
import "./Notification.css";

function NotificationStudent() {
  const dispatch = useDispatch();
  const { notifications, loading, error } = useSelector(
    (state) => state.notificationStudent
  );

  useEffect(() => {
    dispatch(fetchNotificationsStudentRequest());
  }, [dispatch]);

  return (
    <div className="NotificationPage">
      <div className="NT-grid-container">
        <div className="NT-grid-item">
          <h2 className="NT-st_title">
            <img
              src={notification_icon}
              className="Edit-icon"
              alt="Notification Icon"
            />{" "}
            Notifications
          </h2>
        </div>
      </div>
      <div className="NT-grid-container">
        <div className="NT-grid-item">
          <Link to={PATH_NAME.SETTING} className="NT-setting_noti">
            Notification Setting
          </Link>
          <div className="NT-all_msg_bg">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
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
                          {" "}
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

export default NotificationStudent;
