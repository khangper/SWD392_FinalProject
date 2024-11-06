import React, { useEffect, useState } from "react";
import "./CreateNewCourse.css";
import createCourseIcon from "../../assets/browse-instructor.png";
import infoIcon from "../../assets/info.png";
import curriculumIcon from "../../assets/curriculum.png";
import listIcon from "../../assets/list.png";
import blackMenuIcon from "../../assets/black-menu.png";
import editIcon from "../../assets/edit.png";
import binIcon from "../../assets/bin.png";
import addIcon from "../../assets/add.png";
import imageIcon from "../../assets/image.png";
import priceIcon from "../../assets/price.png";
import submitIcon from "../../assets/submit.png";
import createIcon from "../../assets/create.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from "react-select";
import LectureModal from "./components/lectureModal/LectureModal";
import { LectureTab, LectureTabs } from "./components/lectureTab/LectureTabs";
import PriceTabs from "./components/priceTab/PriceTabs";
import { useDispatch, useSelector } from "react-redux";
import { createCourseRequest } from "../../redux/reduxActions/CreateCourseAction";

const CreateNewCourse = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Basic", "Curriculum", "Media", "Price", "Publish"];

  const [selectedCourseLevels, setSelectedCourseLevels] = useState([]);
  const [selectedAudioLanguages, setSelectedAudioLanguages] = useState([]);
  const [selectedCloseCaption, setSelectedCloseCaption] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [courseLevels, setCourseLevels] = useState([]);
  const [audioLanguages, setAudioLanguages] = useState([]);
  const [closeCaption, setCloseCaption] = useState([]);
  const [categories, setCategories] = useState([]);

  const [activeTab, setActiveTab] = useState("free");
  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPrice(value);
  };
  useEffect(() => {
    // Sample data for course levels
    const sampleCourseLevels = [
      { value: "beginner", label: "Beginner" },
      { value: "intermediate", label: "Intermediate" },
      { value: "expert", label: "Expert" },
    ];

    // Sample data for audio languages
    const sampleAudioLanguages = [
      { value: "english", label: "English" },
      { value: "spanish", label: "Español" },
      { value: "portuguese", label: "Português" },
      { value: "japanese", label: "日本語" },
      { value: "german", label: "Deutsch" },
    ];

    // Sample data for categories
    const sampleCategories = [
      { value: "web-development", label: "Web Development" },
      { value: "data-science", label: "Data Science" },
    ];

    setCourseLevels(sampleCourseLevels);
    setAudioLanguages(sampleAudioLanguages);
    setCloseCaption(sampleAudioLanguages);
    setCategories(sampleCategories);
  }, []);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "5px",
      fontSize: "1rem",
      height: "40px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#fff",
      boxShadow: state.isFocused ? "0 0 0 1px #007bff" : "none",
      "&:hover": {
        borderColor: "#007bff",
      },
    }),
    menu: (provided) => ({
      ...provided,
      fontSize: "1rem",
      zIndex: 9999,
      maxHeight: "200px",
      position: "absolute",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#00b2a9",
      fontWeight: "bold",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#00b2a9",
      "&:hover": {
        backgroundColor: "transparent",
        color: "black",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#00b2a9",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#00b2a9",
    }),
  };

  const formatOptionLabel = ({ value, label }, { context }) => {
    if (context === "value") {
      if (selectedAudioLanguages.length > 5) {
        return `${selectedAudioLanguages.length} items selected`;
      }
      return <div>{label}</div>;
    }
    return label;
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const [items, setItems] = useState([
    { title: "Quiz Title", icon: blackMenuIcon },
    { title: "Lecture Title", icon: blackMenuIcon },
    { title: "Assignment Title", icon: blackMenuIcon },
  ]);

  const onDragStart = (event, index) => {
    event.dataTransfer.setData("draggedItemIndex", index);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, index) => {
    const draggedItemIndex = event.dataTransfer.getData("draggedItemIndex");
    const newItems = [...items];
    const draggedItem = newItems.splice(draggedItemIndex, 1)[0];
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
  };
  const [showLectureModal, setShowLectureModal] = useState(false);

  const handleOpenLectureModal = () => {
    setShowLectureModal(true);
  };

  const handleCloseLectureModal = () => {
    setShowLectureModal(false);
  };
  const handleHoursChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setHours(value);
  };
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [hours, setHours] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("Title:", title);
    console.log("Author:", author);
    console.log("Date:", date);
    console.log("Price:", price);
    console.log("Hours:", hours);
    console.log("Selected Category:", selectedCategory);

    if (!title || !author || !date || !price || !hours || !selectedCategory) {
      alert("Please fill out all required fields.");
      return;
    }
    const courseData = {
      title,
      author,
      date,
      price: `$${price}`,
      hours: `${hours} hours`,
      category: selectedCategory.label,
      imgSrc,
      // "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg",
      rating: "4",
      views: "200k",
    };
    dispatch(createCourseRequest(courseData));
  };
  const { course } = useSelector((state) => state.createCourse);
  useEffect(() => {
    if (course) {
      alert(
        "Successfully created a new Course! Please redirect back to Explore page to review."
      );
    }
  }, [course]);

  return (
    <div className="create-new-course-container">
      <div className="create-new-course-header">
        <h2 className="create-new-course-title">
          <img src={createCourseIcon} alt="Create Course Icon" />
          Create a New Course
        </h2>
      </div>
      <div className="create-new-course-body">
        {/* <ul className="step-steps">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`step-item ${
                currentStep === index
                  ? "active"
                  : currentStep > index
                  ? "done"
                  : ""
              }`}
            >
              <a
                href={`#tab_step${index + 1}`}
                className="flex"
                onClick={() => setCurrentStep(index)}
              >
                <span className="number"></span>
                <span className="step-name">{step}</span>
              </a>
            </li>
          ))}
        </ul> */}
        <section className="content-section">
          {currentStep === 0 && (
            <div className="content-tab-container">
              <div className="content-tab-header">
                <h3>
                  <img src={infoIcon} />
                  Basic Information
                </h3>
              </div>
              <div className="content-tab-content">
                <div className="content-tab-title">
                  <h4>Course title*</h4>
                </div>
                <div className="content-tab-form">
                  <div className="headline-group">
                    <div className="form-group">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Course title here"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <div className="form-counter">60</div>
                    </div>
                    <div className="help-block">
                      (Please make this a maximum of 100 characters and unique.)
                    </div>
                  </div>
                  <div className="content-tab-title">
                    <h4>Author*</h4>
                  </div>
                  <div className="headline-group">
                    <div className="form-group">
                      <textarea
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Author here..."
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                      <div className="help-block">220 words.</div>
                    </div>
                  </div>
                  {/* <div className="content-tab-title">
                    <h4>Course description*</h4>
                  </div>
                  <div className="headline-group">
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
                  </div> */}

                  <div className="content-tab-title">
                    <h4>Regular Price*</h4>
                  </div>
                  <div className="headline-group-2">
                    <div className="form-group">
                      <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="$0"
                        value={price}
                        onChange={handlePriceChange}
                      />
                      <div className="form-counter">USD</div>
                    </div>
                  </div>
                  <div className="content-tab-form-split">
                    <div className="content-tab-form-left">
                      <div className="content-tab-title">
                        <h4>Date*</h4>
                      </div>
                      <div className="headline-group">
                        <div className="form-group">
                          <textarea
                            type="text"
                            id="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                          <div className="help-block">
                            Student will gain these skills and knowledge after
                            completing this course. (One per line).
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-tab-form-left">
                      <div className="content-tab-title">
                        <h4>Hours*</h4>
                      </div>
                      <div className="headline-group">
                        <div className="form-group">
                          <textarea
                            type="text"
                            id="hours"
                            name="hours"
                            value={hours}
                            onChange={handleHoursChange}
                          />
                          <div className="help-block">
                            What knowledge, technology, and tools are required
                            by users to start this course. (One per line).
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-tab-form-split">
                    {/* <div className="content-tab-form-left">
                      <div className="content-tab-title">
                        <h4>Course level*</h4>
                      </div>
                      <div className="headline-group">
                        <div className="form-group">
                          <Select
                            isMulti
                            options={courseLevels}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            value={selectedCourseLevels}
                            onChange={setSelectedCourseLevels}
                            placeholder="Nothing selected"
                            styles={customStyles}
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="content-tab-form-left">
                      <div className="content-tab-title">
                        <h4>Audio language*</h4>
                      </div>
                      <div className="headline-group">
                        <div className="form-group">
                          <Select
                            isMulti
                            options={audioLanguages}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            value={selectedAudioLanguages}
                            onChange={setSelectedAudioLanguages}
                            placeholder="Select Audio"
                            styles={customStyles}
                            formatOptionLabel={formatOptionLabel}
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="content-tab-form-split">
                    {/* <div className="content-tab-form-left">
                      <div className="content-tab-title">
                        <h4>Close caption*</h4>
                      </div>
                      <div className="headline-group">
                        <div className="form-group">
                          <Select
                            isMulti
                            options={closeCaption}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            value={selectedCloseCaption}
                            onChange={setSelectedCloseCaption}
                            placeholder="Select Close Caption"
                            styles={customStyles}
                            menuPlacement="top"
                          />
                        </div>
                      </div>
                    </div> */}

                    <div className="content-tab-form-left">
                      <div className="content-tab-title">
                        <h4>Course category*</h4>
                      </div>
                      <div className="headline-group">
                        <div className="form-group">
                          <Select
                            options={categories}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                            placeholder="Select Category"
                            styles={customStyles}
                            menuPlacement="top"
                          />
                        </div>
                      </div>
                      <div className="content-tab-title">
                        <h4>Input link img*</h4>
                      </div>
                      <div className="headline-group">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Image URL"
                            value={imgSrc}
                            onChange={(e) => setImgSrc(e.target.value)}
                            className="react-select-container"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-direction="finish"
                className="btn btn-default steps_btn"
                onClick={handleSubmit}
              >
                Submit for Review
              </button>
            </div>
          )}
          {/* {currentStep === 1 && (
            <div className="content-tab-container">
              <div className="content-tab-header">
                <h3>
                  <img src={curriculumIcon} />
                  Curriculum
                </h3>
              </div>
              <div className="curriculum-tab-content">
                <div className="curriculum-add-item">
                  <h4>
                    <img src={listIcon} />
                    Curriculum
                  </h4>
                  <button className="curriculum-btn">New Section</button>
                </div>
                <div className="added-section-item">
                  <div className="added-section-header">
                    <div className="section-title">
                      <h4>
                        <img src={blackMenuIcon} alt="menu icon" />
                        Introduction
                      </h4>
                    </div>
                    <div className="section-edit-options">
                      <img src={editIcon} alt="edit icon" />
                      <img src={binIcon} alt="bin icon" />
                    </div>
                  </div>
                  <div className="section-group-sortable-list">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="section-item"
                        draggable
                        onDragStart={(event) => onDragStart(event, index)}
                        onDragOver={onDragOver}
                        onDrop={(event) => onDrop(event, index)}
                      >
                        <h4>
                          <img src={item.icon} alt="item icon" />
                          {item.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                  <div className="section-add-item-wrap">
                    <button
                      className="section-add-btn"
                      onClick={handleOpenLectureModal}
                    >
                      <img src={addIcon} alt="add icon" /> Lecture
                    </button>
                    <button className="section-add-btn">
                      <img src={addIcon} alt="add icon" /> Quiz
                    </button>
                    <button className="section-add-btn">
                      <img src={addIcon} alt="add icon" /> Assignment
                    </button>
                  </div>
                </div>
                <LectureModal
                  showModal={showLectureModal}
                  closeModal={handleCloseLectureModal}
                />
              </div>
            </div>
          )} */}
          {/* {currentStep === 2 && (
            <div className="content-tab-container">
              <div className="content-tab-header">
                <h3>
                  <img src={imageIcon} />
                  Media
                </h3>
              </div>
              <div className="video-content-tab">
                <span className="video-info">
                  Select your preferred video type. (.mp4, YouTube, Vimeo etc.)
                </span>
                <div className="video-category">
                  <LectureTabs>
                    <LectureTab label="HTML5(MP4)">
                      <div className="html5-tab">
                        <div className="html5-block">
                          <div className="html5-left-course">
                            <div className="html5-upload-file">
                              <div className="html5-upload-btn">
                                <input type="file" />
                                <label htmlFor="Videofile" title="Zip">
                                  Upload Video
                                </label>
                              </div>
                              <span>File format: .mp4</span>
                            </div>
                          </div>
                        </div>
                        <div className="create-new-course-video-body">
                          <div className="content-tab-title">
                            <h4>Course thumbnail*</h4>
                          </div>
                          <div className="thumb-item">
                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/thumbnail-demo.jpg" />
                            <div className="thumb-dt">
                              <div className="html5-upload-btn">
                                <input type="file" />
                                <label htmlFor="Videofile" title="Zip">
                                  Choose thumbnail
                                </label>
                              </div>
                              <span className="upload-id">
                                Size: 590x300 pixels. Supports: jpg,jpeg, or png
                              </span>
                            </div>
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
                        <div className="create-new-course-video-body">
                          <div className="content-tab-title">
                            <h4>Course thumbnail*</h4>
                          </div>
                          <div className="thumb-item">
                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/thumbnail-demo.jpg" />
                            <div className="thumb-dt">
                              <div className="html5-upload-btn">
                                <input type="file" />
                                <label htmlFor="Videofile" title="Zip">
                                  Choose thumbnail
                                </label>
                              </div>
                              <span className="upload-id">
                                Size: 590x300 pixels. Supports: jpg,jpeg, or png
                              </span>
                            </div>
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
                        <div className="create-new-course-video-body">
                          <div className="content-tab-title">
                            <h4>Course thumbnail*</h4>
                          </div>
                          <div className="thumb-item">
                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/thumbnail-demo.jpg" />
                            <div className="thumb-dt">
                              <div className="html5-upload-btn">
                                <input type="file" />
                                <label htmlFor="Videofile" title="Zip">
                                  Choose thumbnail
                                </label>
                              </div>
                              <span className="upload-id">
                                Size: 590x300 pixels. Supports: jpg,jpeg, or png
                              </span>
                            </div>
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
                        <div className="create-new-course-video-body">
                          <div className="content-tab-title">
                            <h4>Course thumbnail*</h4>
                          </div>
                          <div className="thumb-item">
                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/thumbnail-demo.jpg" />
                            <div className="thumb-dt">
                              <div className="html5-upload-btn">
                                <input type="file" />
                                <label htmlFor="Videofile" title="Zip">
                                  Choose thumbnail
                                </label>
                              </div>
                              <span className="upload-id">
                                Size: 590x300 pixels. Supports: jpg,jpeg, or png
                              </span>
                            </div>
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
                        <div className="create-new-course-video-body">
                          <div className="content-tab-title">
                            <h4>Course thumbnail*</h4>
                          </div>
                          <div className="thumb-item">
                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/thumbnail-demo.jpg" />
                            <div className="thumb-dt">
                              <div className="html5-upload-btn">
                                <input type="file" />
                                <label htmlFor="Videofile" title="Zip">
                                  Choose thumbnail
                                </label>
                              </div>
                              <span className="upload-id">
                                Size: 590x300 pixels. Supports: jpg,jpeg, or png
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </LectureTab>
                  </LectureTabs>
                </div>
              </div>
            </div>
          )} */}
          {/* {currentStep === 3 && (
            <div className="content-tab-container">
              <div className="content-tab-header">
                <h3>
                  <img src={priceIcon} />
                  Price
                </h3>
              </div>
              <div className="content-tab-content">
                <PriceTabs price={price} setPrice={setPrice} />
              </div>
            </div>
          )} */}
          {currentStep === 4 && (
            <div className="content-tab-container">
              <div className="content-tab-header">
                <h3>
                  <img src={submitIcon} />
                  Submit
                </h3>
              </div>
              <div className="publish-block">
                <img src={createIcon} />
                <p>
                  Your course is in a draft state. Students cannot view,
                  purchase or enroll in this course. For students that are
                  already enrolled, this course will not appear on their student
                  Dashboard.
                </p>
              </div>
            </div>
          )}
        </section>
        <div className="step-footer step-tab-pager">
          <button
            data-direction="prev"
            className="btn btn-default steps_btn"
            onClick={handlePrev}
            style={{ display: currentStep === 0 ? "none" : "block" }}
          >
            PREVIOUS
          </button>
          {/* {currentStep < steps.length - 1 && (
            <button
              data-direction="next"
              className="btn btn-default steps_btn"
              onClick={handleNext}
            >
              Next
            </button>
          )} */}
          {currentStep === steps.length - 1 && (
            <button
              data-direction="finish"
              className="btn btn-default steps_btn"
              onClick={handleSubmit}
            >
              Submit for Review
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateNewCourse;
