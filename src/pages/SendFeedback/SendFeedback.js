import React, { useState } from 'react';
import "./SendFeedback.css";
import send_feedback from '../../assets/send-feedback.png';
import emailjs from '@emailjs/browser';

export default function SendFeedback() {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState('');
    const [fileSelected, setFileSelected] = useState(false);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const uploadFileToCloudinary = async (file) => {
        const formData = new FormData();    
        formData.append('file', file);
        formData.append('upload_preset', 'attachment'); 

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/drpal7o6y/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                return data.secure_url;
            } else {
                throw new Error(data.error.message);
            }
        } catch (error) {
            console.error('Error uploading file to Cloudinary:', error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let fileUploadedUrl = fileUrl;

        if (file) {
            fileUploadedUrl = await uploadFileToCloudinary(file);
            if (!fileUploadedUrl) {
                setLoading(false);
                return;
            }
            setFileUrl(fileUploadedUrl);
        }

        const templateParams = {
            from_email: email,
            message: description,
            attachment_url: fileUploadedUrl,
        };

        emailjs.send('service_mail_haonn', 'template_haonn', templateParams, 'ZvSJNf8vhDCcwsC_Y')
            .then((result) => {
                setLoading(false);
                setEmail('');
                setDescription('');
                setFile(null);
                setFileUrl('');
                setFileSelected(false);
                setImagePreviewUrl(null);
                console.log('Email sent successfully:', result.text);
                alert('Successfully created a new Course! Please redirect back to Explore page to review');
            }, (error) => {
                console.error('Error sending email:', error);
                setLoading(false);
            });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size > 10 * 1024 * 1024) { 
            alert('File size should not exceed 10MB');
        } else {
            setFile(selectedFile);
            setFileSelected(true);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            if (selectedFile) {
                reader.readAsDataURL(selectedFile);
            }
        }
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
                            <input 
                                className="Email-Sendfeeback" 
                                type="email" 
                                name="from_email" 
                                id="id_email" 
                                required 
                                maxLength="64" 
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="Describe-feedback">
                        <div className="ui form swdh30">
                            <div className="field">
                                <textarea 
                                    rows="6" 
                                    name="message" 
                                    id="id_about" 
                                    placeholder="Describe your issue or share your ideas"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-group1 mt-30">
                        <label className="add-creen" htmlFor="file5">Add Screenshots</label>
                        <div className="image-upload-wrap">
                            <input 
                                className="file-upload-input" 
                                id="file5" 
                                name='attachment_url' 
                                type="file" 
                                accept="image/*" 
                                onChange={handleFileChange} 
                            />
                            <div className="drag-text">
                                <i className="fas fa-cloud-upload-alt"></i>
                                <h4>{fileSelected ? "Screenshot selected" : "Select screenshots to upload"}</h4>
                                <p>or drag and drop screenshots</p>
                            </div>
                            {imagePreviewUrl && (
                                <div className="image-preview">
                                    <img src={imagePreviewUrl} alt="Selected Screenshot" />
                                </div>
                            )}
                        </div>
                    </div>
                    <button 
                        className="SendFeedback_btn" 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Send Feedback'}
                    </button>
                </form>
            </div>
        </div>
    );
}