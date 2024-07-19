import React, { useEffect, useState } from "react";
import "./LectureModal.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { LectureTabs, LectureTab } from "../lectureTab/LectureTabs";
import bin from "../../../../assets/bin.png"
const LectureModal = ({ showModal, closeModal }) => {
  const [activeTab, setActiveTab] = useState("basic");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showModal]);

  return (
    showModal && (
      <div className="lecture-modal-overlay">
        <div className="lecture-modal-content">
          <div className="lecture-modal-header">
            <h5>Add Lecture</h5>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
          </div>
          <div className="lecture-modal-body">
            <div className="lecture-modal-block">
              <div className="tabs">
                <button
                  className={`tab ${activeTab === "basic" ? "active" : ""}`}
                  onClick={() => handleTabClick("basic")}
                >
                  Basic
                </button>
                <button
                  className={`tab ${activeTab === "video" ? "active" : ""}`}
                  onClick={() => handleTabClick("video")}
                >
                  Video
                </button>
                <button
                  className={`tab ${
                    activeTab === "attachments" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("attachments")}
                >
                  Attachments
                </button>
              </div>
              <div className="lecture-modal-tab-content">
                {activeTab === "basic" && (
                  <div className="lecture-tab-pane">
                    <div className="lecture-content-tab-title">
                      <h5>Lecture title*</h5>
                    </div>
                    <div className="content-tab-form">
                      <div className="headline-group">
                        <input
                          type="text"
                          id="headline"
                          name="headline"
                          placeholder="Title here"
                        />
                      </div>
                    </div>
                    <div className="lecture-content-tab-title">
                      <h5>Description*</h5>
                    </div>
                    <div className="content-tab-form">
                      <div className="headline-group-ck">
                        <CKEditor
                          editor={ClassicEditor}
                          config={{
                            toolbar: [
                              "heading",
                              "|",
                              "bold",
                              "italic",
                              "link",
                              "bulletedList",
                              "numberedList",
                              "blockQuote",
                              "imageUpload",
                              "insertTable",
                              "mediaEmbed",
                              "undo",
                              "redo",
                            ],
                          }}
                          data=""
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </div>
                    <div className="lecture-preview">
                      <span>Free Preview</span>
                      <label className="lecture-switch">
                        <input
                          type="checkbox"
                          className="preview-op"
                          value=""
                        />
                        <span></span>
                      </label>
                    </div>
                  </div>
                )}
                {activeTab === "video" && (
                  <div className="video-tab-pane">
                    <span className="video-info">
                      Select your preferred video type. (.mp4, YouTube, Vimeo
                      etc.)
                    </span>
                    <div className="video-category">
                      <LectureTabs>
                        <LectureTab label="HTML5(MP4)">
                          <div className="html5-tab">
                            <div className="html5-block">
                              <div className="html5-left">
                                <div className="html5-upload-file">
                                  <div className="html5-upload-btn">
                                    <input type="file" />
                                    <label htmlFor="Videofile" title="Zip">
                                      Upload Video
                                    </label>
                                  </div>
                                  <span>File format: .mp4</span>
                                  <span className="upload-id">
                                    Uploaded ID : <b>12</b>
                                  </span>
                                </div>
                              </div>
                              <div className="html5-right">
                                <div className="html5-upload-file">
                                  <div className="html5-upload-btn">
                                    <input type="file" />
                                    <label htmlFor="Videofile" title="Zip">
                                      Video Poster
                                    </label>
                                  </div>
                                  <span className="upload-id">
                                    Uploaded ID : preview.jpg
                                  </span>
                                  <span className="upload-id color-fmt">
                                    Size: 590x300 pixels. Supports: jpg,jpeg, or
                                    png
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="video-duration">
                              <label>
                                Video Runtime - <strong>hh:mm:ss</strong>*
                              </label>
                            </div>
                            <div className="duration-time">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][hours]"
                                />
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][mins]"
                                />
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][secs]"
                                />
                              </div>
                            </div>
                          </div>
                        </LectureTab>
                        <LectureTab label="External URL">
                          <div className="html5-tab">
                            <div className="content-tab-title">
                              <h4>External URL*</h4>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                id="headline"
                                name="headline"
                                placeholder="External Video URL"
                              />
                            </div>
                            <div className="video-duration">
                              <label>
                                Video Runtime - <strong>hh:mm:ss</strong>*
                              </label>
                            </div>
                            <div className="duration-time">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][hours]"
                                />
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][mins]"
                                />
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][secs]"
                                />
                              </div>
                            </div>
                          </div>
                        </LectureTab>
                        <LectureTab label="YouTube">
                          <div className="html5-tab">
                            <div className="content-tab-title">
                              <h4>Youtube URL*</h4>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                id="headline"
                                name="headline"
                                placeholder="Youtube Video URL"
                              />
                            </div>
                            <div className="video-duration">
                              <label>
                                Video Runtime - <strong>hh:mm:ss</strong>*
                              </label>
                            </div>
                            <div className="duration-time">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][hours]"
                                />
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][mins]"
                                />
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][secs]"
                                />
                              </div>
                            </div>
                          </div>
                        </LectureTab>
                        <LectureTab label="Vimeo">
                          <div className="html5-tab">
                            <div className="content-tab-title">
                              <h4>Vimeo URL*</h4>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                id="headline"
                                name="headline"
                                placeholder="Vimeo Video URL"
                              />
                            </div>
                            <div className="video-duration">
                              <label>
                                Video Runtime - <strong>hh:mm:ss</strong>*
                              </label>
                            </div>
                            <div className="duration-time">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][hours]"
                                />
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][mins]"
                                />
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][secs]"
                                />
                              </div>
                            </div>
                          </div>
                        </LectureTab>
                        <LectureTab label="embedded">
                          <div className="html5-tab">
                            <div className="content-tab-title">
                              <h4>Embedded Code*</h4>
                            </div>
                            <div className="form-group">
                              <textarea
                                type="text"
                                id="headline"
                                name="headline"
                                placeholder="External Video URL"
                              />
                            </div>
                            <div className="video-duration">
                              <label>
                                Video Runtime - <strong>hh:mm:ss</strong>*
                              </label>
                            </div>
                            <div className="duration-time">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][hours]"
                                />
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][mins]"
                                />
                                <input
                                  type="text"
                                  className="form-input-1"
                                  name="video[runtime][secs]"
                                />
                              </div>
                            </div>
                          </div>
                        </LectureTab>
                      </LectureTabs>
                    </div>
                  </div>
                )}
                {activeTab === "attachments" && (
                  <div className="attachments-tab-pane">
                     <div className="html5-upload-btn">
                                    <input type="file" />
                                    <label htmlFor="Videofile" title="Zip">
                                      ATTACHMENTS
                                    </label>
                                  </div>
                                  <span>Supports: jpg, jpeg, png, pdf or .zip</span>
                                  <div className="add-attachments">
                                    <div className="attachments-items">
                                        <div className="attachment-id">
                                        Uploaded ID: 12
                                        </div>
                                        <button type="button" className="cancel-btn">
                                            <img src={bin}/>
                                        </button>
                                    </div>
                                    <div className="attachments-items">
                                        <div className="attachment-id">
                                        Uploaded ID: 13
                                        </div>
                                        <button type="button" className="cancel-btn">
                                            <img src={bin}/>
                                        </button>
                                    </div>
                                    <div className="attachments-items">
                                        <div className="attachment-id">
                                        Uploaded ID: 14
                                        </div>
                                        <button type="button" className="cancel-btn">
                                            <img src={bin}/>
                                        </button>
                                    </div>
                                  </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lecture-modal-footer">
            <button onClick={closeModal}>Close</button>
            <button className="main-btn">Add Lecture</button>
          </div>
        </div>
      </div>
    )
  );
};

export default LectureModal;
