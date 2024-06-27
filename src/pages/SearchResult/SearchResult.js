import React from 'react'
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
                            <img src={Search} alt="" class="search-icon" />
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

                            <div class="SR_Filter">Filters</div>
                            <div class="SR_Sort">
                                <p class="">
                                    Sort
                                </p>
                                <span class="SR_Dropdown_Sort ">
                                    <img className="Sort_Dropdown_Icon" src={dropdown} />
                                </span>
                            </div>
                            {/* <div class="tb_145">
                                <div class="panel-group accordion" id="accordionfilter">
                                    <div class="panel panel-default">
                                        <div class="panel-heading" id="headingOne">
                                            <div class="panel-title10">
                                                <a class="" data-bs-toggle="collapse" data-bs-target="#collapseOne" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Topic
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionfilter" style={{}}>
                                            <div class="panel-body">
                                                <div class="ui form">
                                                    <div class="grouped fields">
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>SEO<span class="filter__counter">(428)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Php<span class="filter__counter">(1526)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Wordpress Pro<span class="filter__counter">(428)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>WooCommerce<span class="filter__counter">(958)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Bootstrap<span class="filter__counter">(748)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Web Development<span class="filter__counter">(2256)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Web Design<span class="filter__counter">(4859)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Digital Marketing<span class="filter__counter">(2458)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>E-commerce<span class="filter__counter">(1245)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Wordpress Themes<span class="filter__counter">(5879)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Wordpress Plugins<span class="filter__counter">(2654)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Wordpress Hosting<span class="filter__counter">(1485)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Elementor<span class="filter__counter">(3658)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Wordpress for Ecommerce<span class="filter__counter">(5894)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" id="headingTwo">
                                            <div class="panel-title10">
                                                <a class="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" href="#" aria-expanded="false" aria-controls="collapseTwo">
                                                    Level
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionfilter">
                                            <div class="panel-body">
                                                <div class="ui form">
                                                    <div class="grouped fields">
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>All Levels<span class="filter__counter">(5000)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Beginner<span class="filter__counter">(3517)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Intermediate<span class="filter__counter">(1560)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Expert<span class="filter__counter">(240)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" id="headingThree">
                                            <div class="panel-title10">
                                                <a class="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" href="#" aria-expanded="false" aria-controls="collapseThree">
                                                    Language
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionfilter">
                                            <div class="panel-body">
                                                <div class="ui form">
                                                    <div class="grouped fields">
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>English<span class="filter__counter">(500)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Español<span class="filter__counter">(250)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Português<span class="filter__counter">(270)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>日本語<span class="filter__counter">(190)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Deutsch<span class="filter__counter">(120)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Français<span class="filter__counter">(105)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Türkçe<span class="filter__counter">(90)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>हिन्दी<span class="filter__counter">(80)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Italiano<span class="filter__counter">(178)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Polski<span class="filter__counter">(50)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>ภาษาไทย<span class="filter__counter">(27)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Română<span class="filter__counter">(157)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Telugu<span class="filter__counter">(110)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>मराठी<span class="filter__counter">(50)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" id="headingfour">
                                            <div class="panel-title10">
                                                <a class="collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefour" href="#" aria-expanded="false" aria-controls="collapsefour">
                                                    Price
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapsefour" class="panel-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionfilter">
                                            <div class="panel-body">
                                                <div class="ui form">
                                                    <div class="grouped fields">
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Paid<span class="filter__counter">(3000)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Free<span class="filter__counter">(50)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" id="headingfive">
                                            <div class="panel-title10">
                                                <a class="collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive" href="#" aria-expanded="false" aria-controls="collapsefive">
                                                    Features
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapsefive" class="panel-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionfilter">
                                            <div class="panel-body">
                                                <div class="ui form">
                                                    <div class="grouped fields">
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Captions<span class="filter__counter">(4780)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Quizzes<span class="filter__counter">(890)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Coding Exercises<span class="filter__counter">(350)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Practice Tests<span class="filter__counter">(1050)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" id="headingsix">
                                            <div class="panel-title10">
                                                <a class="collapsed" data-bs-toggle="collapse" data-bs-target="#collapsesix" href="#" aria-expanded="false" aria-controls="collapsesix">
                                                    Rating
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapsesix" class="panel-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionfilter">
                                            <div class="panel-body">
                                                <div class="ui form">
                                                    <div class="grouped fields">
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label class="rating_filter">
                                                                        <i class="uil uil-star"></i>
                                                                        <i class="uil uil-star"></i>
                                                                        <i class="uil uil-star"></i>
                                                                        <i class="uil uil-star"></i>
                                                                        <i class="uil uil-star"></i>
                                                                        5.0 &amp; up
                                                                        <span class="filter__counter">(5000)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label class="rating_filter">
                                                                        <i class="uil uil-star"></i>
                                                                        <i class="uil uil-star"></i>
                                                                        <i class="uil uil-star"></i>
                                                                        <i class="uil uil-star"></i>
                                                                        4.0 &amp; up
                                                                        <span class="filter__counter">(2500)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label class="rating_filter">
                                                                        <i class="uil uil-star"></i>
                                                                        <i class="uil uil-star"></i>
                                                                        <i class="uil uil-star"></i>
                                                                        3.0 &amp; up
                                                                        <span class="filter__counter">(1500)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label class="rating_filter">
                                                                        <i class="uil uil-star"></i>
                                                                        <i class="uil uil-star"></i>
                                                                        2.0 &amp; up
                                                                        <span class="filter__counter">(122)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" id="headingseven">
                                            <div class="panel-title10">
                                                <a class="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseseven" href="#" aria-expanded="false" aria-controls="collapseseven">
                                                    Video Duration
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapseseven" class="panel-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionfilter">
                                            <div class="panel-body">
                                                <div class="ui form">
                                                    <div class="grouped fields">
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>0-2 Hours<span class="filter__counter">(500)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>3-6 Hours<span class="filter__counter">(150)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>7-18 Hours<span class="filter__counter">(90)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>19+ Hours<span class="filter__counter">(25)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" id="headingeight">
                                            <div class="panel-title10">
                                                <a class="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseeight" href="#" aria-expanded="false" aria-controls="collapseeight">
                                                    Close Caption
                                                </a>
                                            </div>
                                        </div>
                                        <div id="collapseeight" class="panel-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionfilter">
                                            <div class="panel-body">
                                                <div class="ui form">
                                                    <div class="grouped fields">
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>English<span class="filter__counter">(300)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Español<span class="filter__counter">(210)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Português<span class="filter__counter">(170)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Italiano<span class="filter__counter">(174)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Français<span class="filter__counter">(120)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Polski<span class="filter__counter">(130)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Deutsch<span class="filter__counter">(30)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>Bahasa Indonesia<span class="filter__counter">(20)</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui form checkbox_sign">
                                                            <div class="inline field">
                                                                <div class="ui checkbox mncheck">
                                                                    <input type="checkbox" tabindex="0" class="hidden" />
                                                                    <label>ภาษาไทย<span class="filter__counter">(10)</span></label>
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
                            <h4 class="SR_Num_Result">5 Results</h4>
                            <div class="fcrse_1">
                                <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" class="hf_img">
                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                    <div class="SR_Course_Overlay">
                                        <div class="SR_badge_seller">Bestseller</div>
                                        <div class="SR_crse_reviews">
                                            <i class="uil uil-star">
                                                {/* <img className='starIcon' src={ratingStar}></img> */}
                                            </i>4.5
                                        </div>
                                        <span class="SR_play_btn1"><i class="uil uil-play"></i></span>
                                        <div class="SR_crse_timer">
                                            25 hours
                                        </div>
                                    </div>
                                </a>
                                <div class="SR_Content">

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
                                    <div class="SR_Course_View">
                                        <span class="SR_Course_View14">109k views</span>
                                        <span class="SR_Course_View14">15 days ago</span>
                                    </div>
                                    <a href="course_detail_view.html" class="SR_Course_Title">Complete Python Bootcamp: Go from zero to hero in Python 3</a>
                                    <a href="#" class="SR_Course_Sub_Title">Web Development | Python</a>
                                    <div class="SR_Course_Cart">
                                        <p class="SR_Course_Author">By <a href="#">John Doe</a></p>
                                        <div class="SR_Course_Price">$10</div>
                                        <button class="SR_cart_btn" title="cart"><i class="uil uil-shopping-cart-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="fcrse_1 MTSR30">
                                <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" class="hf_img">
                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                    <div class="SR_Course_Overlay">
                                        <div class="SR_badge_seller">Bestseller</div>
                                        <div class="SR_crse_reviews">
                                            <i class="uil uil-star">
                                                {/* <img className='starIcon' src={ratingStar}></img> */}
                                            </i>4.5
                                        </div>
                                        <span class="SR_play_btn1"><i class="uil uil-play"></i></span>
                                        <div class="SR_crse_timer">
                                            25 hours
                                        </div>
                                    </div>
                                </a>
                                <div class="SR_Content">

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
                                    <div class="SR_Course_View">
                                        <span class="SR_Course_View14">109k views</span>
                                        <span class="SR_Course_View14">15 days ago</span>
                                    </div>
                                    <a href="course_detail_view.html" class="SR_Course_Title">Complete Python Bootcamp: Go from zero to hero in Python 3</a>
                                    <a href="#" class="SR_Course_Sub_Title">Web Development | Python</a>
                                    <div class="SR_Course_Cart">
                                        <p class="SR_Course_Author">By <a href="#">John Doe</a></p>
                                        <div class="SR_Course_Price">$10</div>
                                        <button class="SR_cart_btn" title="cart"><i class="uil uil-shopping-cart-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="fcrse_1 MTSR30">
                                <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" class="hf_img">
                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                    <div class="SR_Course_Overlay">
                                        <div class="SR_badge_seller">Bestseller</div>
                                        <div class="SR_crse_reviews">
                                            <i class="uil uil-star">
                                                {/* <img className='starIcon' src={ratingStar}></img> */}
                                            </i>4.5
                                        </div>
                                        <span class="SR_play_btn1"><i class="uil uil-play"></i></span>
                                        <div class="SR_crse_timer">
                                            25 hours
                                        </div>
                                    </div>
                                </a>
                                <div class="SR_Content">

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
                                    <div class="SR_Course_View">
                                        <span class="SR_Course_View14">109k views</span>
                                        <span class="SR_Course_View14">15 days ago</span>
                                    </div>
                                    <a href="course_detail_view.html" class="SR_Course_Title">Complete Python Bootcamp: Go from zero to hero in Python 3</a>
                                    <a href="#" class="SR_Course_Sub_Title">Web Development | Python</a>
                                    <div class="SR_Course_Cart">
                                        <p class="SR_Course_Author">By <a href="#">John Doe</a></p>
                                        <div class="SR_Course_Price">$10</div>
                                        <button class="SR_cart_btn" title="cart"><i class="uil uil-shopping-cart-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="fcrse_1 MTSR30">
                                <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" class="hf_img">
                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                    <div class="SR_Course_Overlay">
                                        <div class="SR_badge_seller">Bestseller</div>
                                        <div class="SR_crse_reviews">
                                            <i class="uil uil-star">
                                                {/* <img className='starIcon' src={ratingStar}></img> */}
                                            </i>4.5
                                        </div>
                                        <span class="SR_play_btn1"><i class="uil uil-play"></i></span>
                                        <div class="SR_crse_timer">
                                            25 hours
                                        </div>
                                    </div>
                                </a>
                                <div class="SR_Content">

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
                                    <div class="SR_Course_View">
                                        <span class="SR_Course_View14">109k views</span>
                                        <span class="SR_Course_View14">15 days ago</span>
                                    </div>
                                    <a href="course_detail_view.html" class="SR_Course_Title">Complete Python Bootcamp: Go from zero to hero in Python 3</a>
                                    <a href="#" class="SR_Course_Sub_Title">Web Development | Python</a>
                                    <div class="SR_Course_Cart">
                                        <p class="SR_Course_Author">By <a href="#">John Doe</a></p>
                                        <div class="SR_Course_Price">$10</div>
                                        <button class="SR_cart_btn" title="cart"><i class="uil uil-shopping-cart-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="fcrse_1 MTSR30">
                                <a href="https://gambolthemes.net/html-items/cursus-new-demo/course_detail_view.html" class="hf_img">
                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                    <div class="SR_Course_Overlay">
                                        <div class="SR_badge_seller">Bestseller</div>
                                        <div class="SR_crse_reviews">
                                            <i class="uil uil-star">
                                                {/* <img className='starIcon' src={ratingStar}></img> */}
                                            </i>4.5
                                        </div>
                                        <span class="SR_play_btn1"><i class="uil uil-play"></i></span>
                                        <div class="SR_crse_timer">
                                            25 hours
                                        </div>
                                    </div>
                                </a>
                                <div class="SR_Content">

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
                                    <div class="SR_Course_View">
                                        <span class="SR_Course_View14">109k views</span>
                                        <span class="SR_Course_View14">15 days ago</span>
                                    </div>
                                    <a href="course_detail_view.html" class="SR_Course_Title">Complete Python Bootcamp: Go from zero to hero in Python 3</a>
                                    <a href="#" class="SR_Course_Sub_Title">Web Development | Python</a>
                                    <div class="SR_Course_Cart">
                                        <p class="SR_Course_Author">By <a href="#">John Doe</a></p>
                                        <div class="SR_Course_Price">$10</div>
                                        <button class="SR_cart_btn" title="cart"><i class="uil uil-shopping-cart-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="SR_main_loader MTSR50">
                                <div class="SR_spinner">
                                    <div class="SR_bounce1"></div>
                                    <div class="SR_bounce2"></div>
                                    <div class="SR_bounce3"></div>
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