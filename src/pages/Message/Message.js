import React, { useEffect } from 'react'
import './Message.css'
import sendmessage from '../../assets/sendmessage.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatMessagesRequest } from '../../redux/reduxActions/MessageAction';

const Message = () => {
    const dispatch = useDispatch();
    const { loading, messages, error } = useSelector(state => state.message);

    useEffect(() => {
        dispatch(fetchChatMessagesRequest());
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
                    <div className="message-row">
                        <div className="message-col-lg-12">
                            <h2 className="st_title">Messages</h2>
                        </div>
                    </div>
                    <div className="message-row">
                        <div className="message-col-12">
                            <div className="message-all_msg_bg">
                                <div className="m-row">
                                    <div className="m-box1">
                                        <div className="msg_search">
                                            <div className="ui search focus">
                                                <div className="m-box-input-search">
                                                    <input className="m-search" type="text" placeholder="Search Messages..." />
                                                    <i className="uil uil-search-alt icon icon8"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="simplebar-content-wrapper">
                                            <div className="group_messages">
                                                {messages.map((message) => (
                                                    <div className="chat__message__dt active">
                                                        <div className="user-status">
                                                            <div className="user-avatar">
                                                                <img src={message.image} alt={message.name} />
                                                                <div className="msg__badge">2</div>
                                                            </div>
                                                            <p className="user-status-title"><span className="bold">{message.name}</span></p>
                                                            <p className="user-status-text">{message.text}</p>
                                                            <p className="user-status-time floaty">{message.time}</p>
                                                        </div>
                                                    </div>
                                                ))}


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-12">
                                        <div className="chatbox_right">
                                            <div className="chat_header">
                                                <div className="user-status-box1">
                                                    <div className="user-avatar">
                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                                    </div>
                                                    <p className="user-status-title"><span className="bold">John Doe</span></p>
                                                    <p className="user-status-tag online">Online</p>
                                                    <div className="user-status-time floaty eps_dots eps_dots5 more_dropdown">
                                                        <a href="#"><i className="uil uil-ellipsis-h"></i></a>
                                                        <div className="dropdown-content">
                                                            <span><i className="uil uil-trash-alt"></i>Delete</span>
                                                            <span><i className="uil uil-ban"></i>Block</span>
                                                            <span><i className="uil uil-windsock"></i>Report</span>
                                                            <span><i className="uil uil-volume-mute"></i>Mute</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="messages-line">
                                                <div className="message-chat">

                                                    <div className="main-message-box ta-right">
                                                        <div className="message-dt">
                                                            <div className="message-inner-dt">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
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
                                                    <div className="main-message-box ta-right">
                                                        <div className="message-dt">
                                                            <div className="message-inner-dt">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
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
                                                    <div className="main-message-box ta-right">
                                                        <div className="message-dt">
                                                            <div className="message-inner-dt">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
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
                                                                <input className="prompt srch_explore" type="text" id="chat-widget-message-text-2" name="chat_widget_message_text_2" placeholder="Write a message..." />
                                                            </div>
                                                        </div>
                                                        <button className="m-send_button" type="submit">
                                                            <img src={sendmessage} alt='' />
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message