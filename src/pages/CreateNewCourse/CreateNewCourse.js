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
  const [information_courses, setinformation_courses] = useState("");
  const [Linkyoutube, setLinkyoutube] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [hours, setHours] = useState("");
  const [imgChannel, setimgChannel] = useState("");
  const [featureCoursesDetail, setFeatureCoursesDetail] = useState({
    title: "",
    information_courses: "",
    rating: 4.5,
    ratingCount: 0,
    enrollCount: 0,
    viewCount: 0,
    dislikeCount: 0,
    likeCount: 0,
    shareCount: 0,
    author: "",
    imgSrc: "",
    Linkyoutube: "",
  });
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
      rating: "4",
      views: "200k",

      feature_courses_detail: {
        title,
        information_courses,
        rating: featureCoursesDetail.rating,
        ratingCount: featureCoursesDetail.ratingCount,
        enrollCount: featureCoursesDetail.enrollCount,
        viewCount: featureCoursesDetail.viewCount,
        dislikeCount: featureCoursesDetail.dislikeCount,
        likeCount: featureCoursesDetail.likeCount,
        shareCount: featureCoursesDetail.shareCount,
        author,
        imgSrc,
        Linkyoutube,
        imgChannel:
          "data:image/jpeg;base64,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",
      },
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
                  <div className="content-tab-title">
                    <h4>Describe*</h4>
                  </div>
                  <div className="headline-group">
                    <div className="form-group">
                      <textarea
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Describe here..."
                        value={information_courses}
                        onChange={(e) => setinformation_courses(e.target.value)}
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
                      <div className="content-tab-title">
                        <h4>Input link video*</h4>
                      </div>
                      <div className="headline-group">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Video URL"
                            value={Linkyoutube}
                            onChange={(e) => setLinkyoutube(e.target.value)}
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
