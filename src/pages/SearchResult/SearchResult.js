import React, { useState } from 'react';
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
    const [selectedTopic, setSelectedTopic] = useState('Topic');

    const sortOptions = [
        'Most Relevant',
        'Most Reviewed',
        'Highest Rated',
        'Newest',
        'Lowest Price',
        'Highest Price'
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSortClick = (sortOption) => {
        setSelectedSort(sortOption);
        setIsOpen(false);
    };

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

    const toggleTopic = () => {
        setIsOpen(!isOpen);
    };

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic.name);
        setIsOpen(false);
    };

    return (
        <>
            <Header />
            <div className='Search_Result_Container'>
                <div className='Search_Result_Title'>
                    <div className='Small_SR_Title'>
                        <div className='Small_SR_Title_Left'>
                            <a href="index.html">Home</a>
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
                                <div className="SR_Tbl_Content">
                                    <div className="SR_Tbl_Content_Topic" onClick={toggleTopic}>
                                        <h4>
                                            {selectedTopic || 'Topic'}
                                        </h4>
                                        <h4 className='icon_tbl'>+</h4>
                                        {isOpen && (
                                            <div className="SR_Tbl_Content_Topic_Menu">
                                                {topics.map((topic, index) => (
                                                    <div
                                                        key={index}
                                                        className="Topic_item"
                                                        onClick={() => handleTopicClick(topic)}
                                                    >
                                                        {topic.name} ({topic.count})
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='SR_Right_Col'>
                        <div className='Search_Result_Body_Right'>
                            <h4 className="SR_Num_Result">5 Results</h4>
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className="fcrse_1 MTSR30">
                                    <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" className="hf_img">
                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                        <div className="SR_Course_Overlay">
                                            <div className="SR_badge_seller">Bestseller</div>
                                            <div className="SR_crse_reviews">
                                                <i className="uil uil-star">
                                                    {/* <img className='starIcon' src={ratingStar} alt='rating' /> */}
                                                </i>4.5
                                            </div>
                                            <span className="SR_play_btn1"><i className="uil uil-play"></i></span>
                                            <div className="SR_crse_timer">
                                                25 hours
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
                                            <span className="SR_Course_View14">109k views</span>
                                            <span className="SR_Course_View14">15 days ago</span>
                                        </div>
                                        <a href="course_detail_view.html" className="SR_Course_Title">Complete Python Bootcamp: Go from zero to hero in Python 3</a>
                                        <a href="#" className="SR_Course_Sub_Title">Web Development | Python</a>
                                        <div className="SR_Course_Cart">
                                            <p className="SR_Course_Author">By <a href="#">John Doe</a></p>
                                            <div className="SR_Course_Price">$10</div>
                                            <button className="SR_cart_btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SearchResult;
