import React from 'react'
import ".//SendFeedback.css"
import send_feedback from '..//../assets/send-feedback.png';
export default function SendFeedback() {
  return (
    <div class="feedback-container">
    <h2 class="SendFeedback-title">
        <img class="sidebar-icon" src={send_feedback} alt="Send Feedback Icon" />  Send Feedback
    </h2>
    <div class="feedback-grid">
        <div class="feedback-form">
            <div class="feedback-email-from">
                <div class="email-address">
                    <input class="Email-Sendfeeback" type="email" name="emailaddress" value="" id="id_email" required="" maxlength="64" placeholder="Email address"/>                                                            
                </div>
            </div>
            <div class="Describe-feedback">                                                                
                <div class="ui form swdh30">
                    <div class="field">
                        <textarea rows="6" name="description" id="id_about" placeholder="Describe your issue or share your ideas"></textarea>
                    </div>
                </div>
            </div>
            <div class="form-group1 mt-30">
                <label className="add-creen" for="file5">Add Screenshots</label>
                <div class="image-upload-wrap">
                    <input class="file-upload-input" id="file5" type="file" onchange="readURL(this);" accept="image/*"/>
                    <div class="drag-text">
                      <i class="fas fa-cloud-upload-alt"></i>
                      <h4>Select screenshots to upload</h4>
                      <p>or drag and drop screenshots</p>
                    </div>
                </div>                                                            
            </div>
            <button class="SendFeedback_btn" type="submit">Send Feedback</button>
        </div>
    </div>                      
</div>

	
  )
}
