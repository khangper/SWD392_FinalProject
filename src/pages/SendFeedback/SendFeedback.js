import React, { useState } from 'react'
import ".//SendFeedback.css"
import send_feedback from '..//../assets/send-feedback.png';
import emailjs from '@emailjs/browser';

export default function SendFeedback() {
    const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_mail_haonn', 'template_haonn', e.target, 'ZvSJNf8vhDCcwsC_Y')
      .then((result) => {
          setLoading(false);
      }, (error) => {
          setLoading(false);
      });
  };

  return (
    <div className="feedback-container">
    <h2 className="Feedback_title">
        <img className="sidebar-icon" src={send_feedback} alt="Send Feedback Icon" />  Send Feedback
    </h2>
    <div className="feedback-grid">
        <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="feedback-email-from">
                <div className="email-address">
                    <input className="Email-Sendfeeback" type="email" name="emailaddress" id="id_email" required maxLength="64" placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>                                                            
                </div>
            </div>
            <div className="Describe-feedback">                                                                
                <div className="ui form swdh30">
                    <div className="field">
                        <textarea rows="6" name="message" id="id_about" placeholder="Describe your issue or share your ideas"
                         value={description}
                         onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
            </div>
            <div className="form-group1 mt-30">
                <label className="add-creen" htmlFor="file5">Add Screenshots</label>
                <div className="image-upload-wrap">
                    <input className="file-upload-input" id="file5" type="file" accept="image/*"/>
                    <div className="drag-text">
                      <i className="fas fa-cloud-upload-alt"></i>
                      <h4>Select screenshots to upload</h4>
                      <p>or drag and drop screenshots</p>
                    </div>
                </div>                                                            
            </div>
            <button className="SendFeedback_btn" type="submit" disabled={loading}>{loading ? 'Loading...' : 'Send Feedback'}</button>
        </form>
    </div>                      
</div>

	
  )
}
