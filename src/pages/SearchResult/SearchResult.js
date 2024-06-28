import React, { useState } from 'react'
import './SearchResult.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../assets/search.png'
import dropdown from "../../assets/dropdown.png";
import ratingStar from "../../assets/rating.png";
import share from "../../assets/share.png";
import saved_course from "../../assets/saved-course.png";
import not_interested from "../../assets/not-interested.png";
import report from "../../assets/report.png";
const SearchResult = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Sort');

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
                            <input type="text" placeholder="Search "></input>

                        </div>
                    </div>
                    <div className='Main_Title'>
                        <h2>Search Results</h2>
                    </div>
                </div>
                <div className='Search_Result_Body'>
                    <div className='SR_Left_Col'>
                        <div className='Search_Result_Body_Left'>

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

                            {/* <div className="tb_145">
                                <div className="panel-group accordion" id="accordionfilter">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" id="headingOne">
                                            <div className="panel-title10">
                                                <a className="" data-bs-toggle="collapse" data-bs-target="#collapseOne" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Topic
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionfilter" style={{}}>
                                            <div className="panel-body">
                                                <div className="ui form">
                                                    <div className="grouped fields">
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>SEO<span className="filter__counter">(428)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Php<span className="filter__counter">(1526)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Wordpress Pro<span className="filter__counter">(428)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>WooCommerce<span className="filter__counter">(958)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Bootstrap<span className="filter__counter">(748)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Web Development<span className="filter__counter">(2256)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Web Design<span className="filter__counter">(4859)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Digital Marketing<span className="filter__counter">(2458)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>E-commerce<span className="filter__counter">(1245)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Wordpress Themes<span className="filter__counter">(5879)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Wordpress Plugins<span className="filter__counter">(2654)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Wordpress Hosting<span className="filter__counter">(1485)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Elementor<span className="filter__counter">(3658)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Wordpress for Ecommerce<span className="filter__counter">(5894)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" id="headingTwo">
                                            <div className="panel-title10">
                                                <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" href="#" aria-expanded="false" aria-controls="collapseTwo">
                                                    Level
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionfilter">
                                            <div className="panel-body">
                                                <div className="ui form">
                                                    <div className="grouped fields">
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>All Levels<span className="filter__counter">(5000)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Beginner<span className="filter__counter">(3517)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Intermediate<span className="filter__counter">(1560)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Expert<span className="filter__counter">(240)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" id="headingThree">
                                            <div className="panel-title10">
                                                <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" href="#" aria-expanded="false" aria-controls="collapseThree">
                                                    Language
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionfilter">
                                            <div className="panel-body">
                                                <div className="ui form">
                                                    <div className="grouped fields">
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>English<span className="filter__counter">(500)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Español<span className="filter__counter">(250)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Português<span className="filter__counter">(270)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>日本語<span className="filter__counter">(190)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Deutsch<span className="filter__counter">(120)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Français<span className="filter__counter">(105)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Türkçe<span className="filter__counter">(90)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>हिन्दी<span className="filter__counter">(80)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Italiano<span className="filter__counter">(178)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Polski<span className="filter__counter">(50)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>ภาษาไทย<span className="filter__counter">(27)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Română<span className="filter__counter">(157)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Telugu<span className="filter__counter">(110)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>मराठी<span className="filter__counter">(50)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" id="headingfour">
                                            <div className="panel-title10">
                                                <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefour" href="#" aria-expanded="false" aria-controls="collapsefour">
                                                    Price
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapsefour" className="panel-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionfilter">
                                            <div className="panel-body">
                                                <div className="ui form">
                                                    <div className="grouped fields">
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Paid<span className="filter__counter">(3000)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Free<span className="filter__counter">(50)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" id="headingfive">
                                            <div className="panel-title10">
                                                <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive" href="#" aria-expanded="false" aria-controls="collapsefive">
                                                    Features
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapsefive" className="panel-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionfilter">
                                            <div className="panel-body">
                                                <div className="ui form">
                                                    <div className="grouped fields">
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Captions<span className="filter__counter">(4780)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Quizzes<span className="filter__counter">(890)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Coding Exercises<span className="filter__counter">(350)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Practice Tests<span className="filter__counter">(1050)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" id="headingsix">
                                            <div className="panel-title10">
                                                <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapsesix" href="#" aria-expanded="false" aria-controls="collapsesix">
                                                    Rating
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapsesix" className="panel-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionfilter">
                                            <div className="panel-body">
                                                <div className="ui form">
                                                    <div className="grouped fields">
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label className="rating_filter">
                                                                        <i className="uil uil-star"></i>
                                                                        <i className="uil uil-star"></i>
                                                                        <i className="uil uil-star"></i>
                                                                        <i className="uil uil-star"></i>
                                                                        <i className="uil uil-star"></i>
                                                                        5.0 &amp; up
                                                                        <span className="filter__counter">(5000)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label className="rating_filter">
                                                                        <i className="uil uil-star"></i>
                                                                        <i className="uil uil-star"></i>
                                                                        <i className="uil uil-star"></i>
                                                                        <i className="uil uil-star"></i>
                                                                        4.0 &amp; up
                                                                        <span className="filter__counter">(2500)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label className="rating_filter">
                                                                        <i className="uil uil-star"></i>
                                                                        <i className="uil uil-star"></i>
                                                                        <i className="uil uil-star"></i>
                                                                        3.0 &amp; up
                                                                        <span className="filter__counter">(1500)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label className="rating_filter">
                                                                        <i className="uil uil-star"></i>
                                                                        <i className="uil uil-star"></i>
                                                                        2.0 &amp; up
                                                                        <span className="filter__counter">(122)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" id="headingseven">
                                            <div className="panel-title10">
                                                <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseseven" href="#" aria-expanded="false" aria-controls="collapseseven">
                                                    Video Duration
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapseseven" className="panel-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionfilter">
                                            <div className="panel-body">
                                                <div className="ui form">
                                                    <div className="grouped fields">
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>0-2 Hours<span className="filter__counter">(500)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>3-6 Hours<span className="filter__counter">(150)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>7-18 Hours<span className="filter__counter">(90)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>19+ Hours<span className="filter__counter">(25)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" id="headingeight">
                                            <div className="panel-title10">
                                                <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseeight" href="#" aria-expanded="false" aria-controls="collapseeight">
                                                    Close Caption
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapseeight" className="panel-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionfilter">
                                            <div className="panel-body">
                                                <div className="ui form">
                                                    <div className="grouped fields">
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>English<span className="filter__counter">(300)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Español<span className="filter__counter">(210)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Português<span className="filter__counter">(170)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Italiano<span className="filter__counter">(174)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Français<span className="filter__counter">(120)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Polski<span className="filter__counter">(130)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Deutsch<span className="filter__counter">(30)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>Bahasa Indonesia<span className="filter__counter">(20)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui form checkbox_sign">
                                                            <div className="inline field">
                                                                <div className="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" className="hidden" />
                                                                    <label>ภาษาไทย<span className="filter__counter">(10)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                    <div className='SR_Right_Col'>
                        <div className='Search_Result_Body_Right'>
                            <h4 className="SR_Num_Result">5 Results</h4>
                            <div className="fcrse_1">
                                <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" className="hf_img">
                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                    <div className="SR_Course_Overlay">
                                        <div className="SR_badge_seller">Bestseller</div>
                                        <div className="SR_crse_reviews">
                                            <i className="uil uil-star">
                                                {/* <img className='starIcon' src={ratingStar}></img> */}
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
                                            <span><img src={share} />Share</span>
                                            <span><img src={saved_course} />Save</span>
                                            <span><img src={not_interested} />Not Interested</span>
                                            <span><img src={report} />Report</span>
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
                            <div className="fcrse_1 MTSR30">
                                <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" className="hf_img">
                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                    <div className="SR_Course_Overlay">
                                        <div className="SR_badge_seller">Bestseller</div>
                                        <div className="SR_crse_reviews">
                                            <i className="uil uil-star">
                                                {/* <img className='starIcon' src={ratingStar}></img> */}
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
                                            <span><img src={share} />Share</span>
                                            <span><img src={saved_course} />Save</span>
                                            <span><img src={not_interested} />Not Interested</span>
                                            <span><img src={report} />Report</span>
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
                            <div className="fcrse_1 MTSR30">
                                <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" className="hf_img">
                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                    <div className="SR_Course_Overlay">
                                        <div className="SR_badge_seller">Bestseller</div>
                                        <div className="SR_crse_reviews">
                                            <i className="uil uil-star">
                                                {/* <img className='starIcon' src={ratingStar}></img> */}
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
                                            <span><img src={share} />Share</span>
                                            <span><img src={saved_course} />Save</span>
                                            <span><img src={not_interested} />Not Interested</span>
                                            <span><img src={report} />Report</span>
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
                            <div className="fcrse_1 MTSR30">
                                <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" className="hf_img">
                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                    <div className="SR_Course_Overlay">
                                        <div className="SR_badge_seller">Bestseller</div>
                                        <div className="SR_crse_reviews">
                                            <i className="uil uil-star">
                                                {/* <img className='starIcon' src={ratingStar}></img> */}
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
                                            <span><img src={share} />Share</span>
                                            <span><img src={saved_course} />Save</span>
                                            <span><img src={not_interested} />Not Interested</span>
                                            <span><img src={report} />Report</span>
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
                            <div className="fcrse_1 MTSR30">
                                <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" className="hf_img">
                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                    <div className="SR_Course_Overlay">
                                        <div className="SR_badge_seller">Bestseller</div>
                                        <div className="SR_crse_reviews">
                                            <i className="uil uil-star">
                                                {/* <img className='starIcon' src={ratingStar}></img> */}
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
                                            <span><img src={share} />Share</span>
                                            <span><img src={saved_course} />Save</span>
                                            <span><img src={not_interested} />Not Interested</span>
                                            <span><img src={report} />Report</span>
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
                            <div className="SR_main_loader MTSR50">
                                <div className="SR_spinner">
                                    <div className="SR_bounce1"></div>
                                    <div className="SR_bounce2"></div>
                                    <div className="SR_bounce3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default SearchResult