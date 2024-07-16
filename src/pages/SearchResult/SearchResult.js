import React, { useState, useRef, useEffect } from 'react';
import './SearchResult.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Search from '../../assets/search.png';
import dropdown from "../../assets/dropdown.png";
import ratingStar from "../../assets/rating.png";
import share from "../../assets/share.png";
import saved_course from "../../assets/saved-course.png";
import not_interested from "../../assets/not-interested.png";
import report from "../../assets/report.png";

const SearchResult = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Sort');
    const [visibleSection, setVisibleSection] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const optionsRef = useRef([]);

    const sortOptions = [
        'Most Relevant',
        'Most Reviewed',
        'Highest Rated',
        'Newest',
        'Lowest Price',
        'Highest Price'
    ];

    const topics = [
        { name: 'SEO', count: 428 },
        { name: 'Php', count: 1526 },
        { name: 'Wordpress Pro', count: 428 },
        { name: 'WooCommerce', count: 958 },
        { name: 'Bootstrap', count: 748 },
        { name: 'Web Development', count: 2256 },
        { name: 'Web Design', count: 4859 },
        { name: 'Digital Marketing', count: 2458 },
        { name: 'E-commerce', count: 1245 },
        { name: 'Wordpress Themes', count: 5879 },
        { name: 'Wordpress Plugins', count: 2654 },
        { name: 'Wordpress Hosting', count: 1485 },
        { name: 'Elementor', count: 3658 },
        { name: 'Wordpress for Ecommerce', count: 5894 }
    ];

    const levels = [
        { name: 'All Levels', count: 5000 },
        { name: 'Beginner', count: 3517 },
        { name: 'Itermediate', count: 1560 },
        { name: 'Expert', count: 240 }
    ];

    const languages = [
        { name: 'English', count: 500 },
        { name: 'Español', count: 250 },
        { name: 'Português', count: 270 },
        { name: '日本語', count: 190 },
        { name: 'Deutsch', count: 120 },
        { name: 'Français', count: 105 },
        { name: 'Türkçe', count: 90 },
        { name: 'हिन्दी', count: 80 },
        { name: 'Italiano', count: 178 },
        { name: 'Polski', count: 50 },
        { name: 'ภาษาไทย', count: 27 },
        { name: 'Română', count: 157 },
        { name: 'Telugu', count: 110 },
        { name: 'मराठी', count: 50 }
    ];

    const prices = [
        { name: 'Paid', count: 3000 },
        { name: 'Free', count: 50 },
    ];

    const features = [
        { name: 'Captions', count: 4780 },
        { name: 'Quizzes', count: 890 },
        { name: 'Coding Exercises', count: 350 },
        { name: 'Practice Tests', count: 1050 }
    ];

    const ratings = [
        { name: '5.0 & up', count: 5000 },
        { name: '4.0 & up', count: 2500 },
        { name: '3.0 & up', count: 1500 },
        { name: '2.0 & up', count: 122 }
    ];

    const videodurations = [
        { name: '0-2 Hours', count: 500 },
        { name: '3-6 Hours', count: 150 },
        { name: '7-18 Hours', count: 90 },
        { name: '19+ Hours', count: 25 }
    ];

    const closecaptions = [
        { name: 'English', count: 300 },
        { name: 'Español', count: 210 },
        { name: 'Português', count: 170 },
        { name: 'Italiano', count: 174 },
        { name: 'Français', count: 120 },
        { name: 'Polski', count: 130 },
        { name: 'Deutsch', count: 30 },
        { name: 'Bahasa Indonesia', count: 20 },
        { name: 'ภาษาไทย', count: 10 }

    ];

    const RS_Courses = [
        {
            id: 1,
            title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
            views: "109k",
            date: "15 days ago",
            imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg",
            price: "$10",
            hours: "25 hours",
            author: "John Doe",
            category: "Web Development | Python",
            rating: 4.5,
        },
        {
            id: 2,
            title: "The Complete JavaScript Course 2020: Build Real Projects!",
            views: "5M",
            date: "15 days ago",
            imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg",
            price: "$5",
            hours: "28 hours",
            author: "Jassica William",
            category: "Development | JavaScript",
            rating: 4.5,
        },
        {
            id: 3,
            title: "Beginning C++ Programming - From Beginner to Beyond",
            views: "1M",
            date: "18 days ago",
            imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-3.jpg",
            price: "$13",
            hours: "12 hours",
            author: "Joginder Singh",
            category: "Development | C++",
            rating: 4.5,
        },
        {
            id: 4,
            title: "The Complete Digital Marketing Course - 12 Courses in 1",
            views: "153k",
            date: "3 months ago",
            imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-4.jpg",
            price: "$12",
            hours: "1 hour",
            author: "Poonam Verma",
            category: "Digital Marketing | Marketing",
            rating: 5.0,
        },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleOptions = (section) => {
        setVisibleSection(prevSection => (prevSection === section ? null : section));
    };

    const handleSortClick = (sortOption) => {
        setSelectedSort(sortOption);
        setIsOpen(false);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

    };

    const handleClickOutside = (event) => {
        if (!optionsRef.current.some(ref => ref && ref.contains(event.target))) {
            setVisibleSection(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <Header />
            <div className='Search_Result_Container'>
                <div className='Search_Result_Title'>
                    <div className='Small_SR_Title'>
                        <div className='Small_SR_Title_Left'>
                            <a href="/home">Home&nbsp;</a>
                            <p>/ Search Results</p>
                        </div>
                        <div className='Small_SR_Title_Right'>
                            <img src={Search} alt="" className="search-icon" />
                            <input type="text" placeholder="Search " />
                        </div>
                    </div>
                    <div className='Main_Title'>
                        <h2>Search Results</h2>
                    </div>
                </div>
                <div className='Search_Result_Body'>
                    <div className='SR_Left_Col'>
                        <div className='Search_Result_Body_Left'>

                            <div className='SR_Filter_Sort_Container'>
                                <div className="SR_Filter">Filters</div>
                                <div className="SR_Sort" onClick={toggleDropdown}>
                                    <p>{selectedSort}</p>
                                    <span className="SR_Dropdown_Sort">
                                        <img className="Sort_Dropdown_Icon" src={dropdown} alt="Dropdown Icon" />
                                    </span>
                                    {isOpen && (
                                        <div className="Sort_Menu">
                                            {sortOptions.map((option, index) => (
                                                <div
                                                    key={index}
                                                    className="Sort_item"
                                                    onClick={() => handleSortClick(option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='Sort_Tbl'>
                                <div className='SR_Tbl_Content' ref={el => optionsRef.current[0] = el}>
                                    <div onClick={() => toggleOptions('topics')}>
                                        <span>Topic</span>
                                        <span>{visibleSection === 'topics' ? '-' : '+'}</span>
                                    </div>
                                    {visibleSection === 'topics' && (
                                        <div className='SR_Tbl_Content_Topic_Menu'>
                                            {topics.map((topic, index) => (
                                                <label key={index}>
                                                    <input
                                                        type="radio"
                                                        name="topic"
                                                        value={topic.name}
                                                        checked={selectedOption === topic.name}
                                                        onChange={handleOptionChange}
                                                    />
                                                    {topic.name} ({topic.count})
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className='SR_Tbl_Content' ref={el => optionsRef.current[1] = el}>
                                    <div onClick={() => toggleOptions('levels')}>
                                        <span>Levels</span>
                                        <span>{visibleSection === 'levels' ? '-' : '+'}</span>
                                    </div>
                                    {visibleSection === 'levels' && (
                                        <div className='SR_Tbl_Content_Topic_Menu'>
                                            {levels.map((level, index) => (
                                                <label key={index}>
                                                    <input
                                                        type="radio"
                                                        name="level"
                                                        value={level.name}
                                                        checked={selectedOption === level.name}
                                                        onChange={handleOptionChange}
                                                    />
                                                    {level.name} ({level.count})
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>


                                <div className='SR_Tbl_Content' ref={el => optionsRef.current[2] = el}>
                                    <div onClick={() => toggleOptions('languages')}>
                                        <span>Languages</span>
                                        <span>{visibleSection === 'languages' ? '-' : '+'}</span>
                                    </div>
                                    {visibleSection === 'languages' && (
                                        <div className='SR_Tbl_Content_Topic_Menu'>
                                            {languages.map((language, index) => (
                                                <label key={index}>
                                                    <input
                                                        type="radio"
                                                        name="language"
                                                        value={language.name}
                                                        checked={selectedOption === language.name}
                                                        onChange={handleOptionChange}
                                                    />
                                                    {language.name} ({language.count})
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className='SR_Tbl_Content' ref={el => optionsRef.current[3] = el}>
                                    <div onClick={() => toggleOptions('prices')}>
                                        <span>Prices</span>
                                        <span>{visibleSection === 'prices' ? '-' : '+'}</span>
                                    </div>
                                    {visibleSection === 'prices' && (
                                        <div className='SR_Tbl_Content_Topic_Menu'>
                                            {prices.map((price, index) => (
                                                <label key={index}>
                                                    <input
                                                        type="radio"
                                                        name="price"
                                                        value={price.name}
                                                        checked={selectedOption === price.name}
                                                        onChange={handleOptionChange}
                                                    />
                                                    {price.name} ({price.count})
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className='SR_Tbl_Content' ref={el => optionsRef.current[4] = el}>
                                    <div onClick={() => toggleOptions('features')}>
                                        <span>Features</span>
                                        <span>{visibleSection === 'features' ? '-' : '+'}</span>
                                    </div>
                                    {visibleSection === 'features' && (
                                        <div className='SR_Tbl_Content_Topic_Menu'>
                                            {features.map((feature, index) => (
                                                <label key={index}>
                                                    <input
                                                        type="radio"
                                                        name="feature"
                                                        value={feature.name}
                                                        checked={selectedOption === feature.name}
                                                        onChange={handleOptionChange}
                                                    />
                                                    {feature.name} ({feature.count})
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className='SR_Tbl_Content' ref={el => optionsRef.current[5] = el}>
                                    <div onClick={() => toggleOptions('ratings')}>
                                        <span>Ratings</span>
                                        <span>{visibleSection === 'ratings' ? '-' : '+'}</span>
                                    </div>
                                    {visibleSection === 'ratings' && (
                                        <div className='SR_Tbl_Content_Topic_Menu'>
                                            {ratings.map((rating, index) => (
                                                <label key={index}>
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        value={rating.name}
                                                        checked={selectedOption === rating.name}
                                                        onChange={handleOptionChange}
                                                    />
                                                    {rating.name} ({rating.count})
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className='SR_Tbl_Content' ref={el => optionsRef.current[6] = el}>
                                    <div onClick={() => toggleOptions('videodurations')}>
                                        <span>Video Durations</span>
                                        <span>{visibleSection === 'videodurations' ? '-' : '+'}</span>
                                    </div>
                                    {visibleSection === 'videodurations' && (
                                        <div className='SR_Tbl_Content_Topic_Menu'>
                                            {videodurations.map((videoduration, index) => (
                                                <label key={index}>
                                                    <input
                                                        type="radio"
                                                        name="videoduration"
                                                        value={videoduration.name}
                                                        checked={selectedOption === videoduration.name}
                                                        onChange={handleOptionChange}
                                                    />
                                                    {videoduration.name} ({videoduration.count})
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className='SR_Tbl_Content' ref={el => optionsRef.current[7] = el}>
                                    <div onClick={() => toggleOptions('closecaptions')}>
                                        <span>Close Captions</span>
                                        <span>{visibleSection === 'closecaptions' ? '-' : '+'}</span>
                                    </div>
                                    {visibleSection === 'closecaptions' && (
                                        <div className='SR_Tbl_Content_Topic_Menu'>
                                            {closecaptions.map((closecaption, index) => (
                                                <label key={index}>
                                                    <input
                                                        type="radio"
                                                        name="closecaption"
                                                        value={closecaption.name}
                                                        checked={selectedOption === closecaption.name}
                                                        onChange={handleOptionChange}
                                                    />
                                                    {closecaption.name} ({closecaption.count})
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='SR_Right_Col'>
                        <div className='Search_Result_Body_Right'>
                            <h4 className="SR_Num_Result">{RS_Courses.length} Results</h4>
                            {RS_Courses.map((course) => (
                                <div key={course.id} className="SR_fcrse_1 MTSR30">
                                    <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" className="hf_img">
                                        <img src={course.imgSrc} alt="" />
                                        <div className="SR_Course_Overlay">
                                            <div className="SR_badge_seller">Bestseller</div>
                                            <div className="SR_crse_reviews">
                                                <i className="uil uil-star"></i>
                                                <img className="RS_starIcon" src={ratingStar}></img>
                                                {course.rating}
                                            </div>
                                            <span className="SR_play_btn1"><i className="uil uil-play"></i></span>
                                            <div className="SR_crse_timer">
                                                {course.hours}
                                            </div>
                                        </div>
                                    </a>
                                    <div className="SR_Content">
                                        <div className="More_Icon_DropDown">
                                            <a href="#" className="dropdown-button">
                                                ⋮
                                            </a>
                                            <div className="course-more-dropdown-menu">
                                                <span><img src={share} alt='share' />Share</span>
                                                <span><img src={saved_course} alt='saved course' />Save</span>
                                                <span><img src={not_interested} alt='not interested' />Not Interested</span>
                                                <span><img src={report} alt='report' />Report</span>
                                            </div>
                                        </div>
                                        <div className="SR_Course_View">
                                            <span className="SR_Course_View14">{course.views} views |&nbsp;</span>
                                            <span className="SR_Course_View14">{course.date}</span>
                                        </div>
                                        <a href="course_detail_view.html" className="SR_Course_Title">{course.title}</a>
                                        <a href="#" className="SR_Course_Sub_Title">{course.category}</a>
                                        <div className="SR_Course_Cart">
                                            <p className="SR_Course_Author">By <a href="#">{course.author}</a></p>
                                            <div className="SR_Course_Price">{course.price}</div>
                                            <button className="SR_cart_btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <section className="load-more">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default SearchResult;